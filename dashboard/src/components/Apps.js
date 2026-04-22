import React, { useEffect, useState } from "react";

import { apiClient } from "../api/client";
import { useAuth } from "../auth/AuthContext";
import "../pages/AuthPage.css";

const Apps = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: "" });

  useEffect(() => {
    const loadUsers = async () => {
      if (user?.role !== "admin") {
        return;
      }

      try {
        setStatus({ loading: true, error: "" });
        const response = await apiClient.get("/auth/users");
        setUsers(response.data);
        setStatus({ loading: false, error: "" });
      } catch (error) {
        setStatus({
          loading: false,
          error: error.response?.data?.message || "Unable to load admin data.",
        });
      }
    };

    loadUsers();
  }, [user?.role]);

  if (user?.role !== "admin") {
    return (
      <div className="admin-card">
        <h2>Apps</h2>
        <p>This area is reserved for admins. Your current role is {user?.role}.</p>
      </div>
    );
  }

  return (
    <div className="admin-card">
      <h2>Admin user list</h2>
      <p>Only admins can fetch this route through role-based authorization.</p>
      {status.loading ? <p>Loading users...</p> : null}
      {status.error ? <p className="loss">{status.error}</p> : null}
      {!status.loading && !status.error ? (
        <ul>
          {users.map((item) => (
            <li key={item._id}>{item.name} - {item.email} - {item.role}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Apps;
