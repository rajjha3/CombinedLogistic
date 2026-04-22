import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";

const Menu = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const getMenuClass = ({ isActive }) => (isActive ? "menu selected" : "menu");
  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "SB";

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Stock Broker logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/" end className={getMenuClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/orders" className={getMenuClass}>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/holdings" className={getMenuClass}>
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/positions" className={getMenuClass}>
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/funds" className={getMenuClass}>
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/apps" className={getMenuClass}>
              Apps
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{initials}</div>
          <div>
            <p className="username">{user?.name || "Trader"}</p>
            <small style={{ color: "#6b7280" }}>{user?.role || "user"}</small>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            style={{ marginLeft: "auto", border: "none", background: "transparent", cursor: "pointer" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
