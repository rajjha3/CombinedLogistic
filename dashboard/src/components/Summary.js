import React from "react";

import { useAuth } from "../auth/AuthContext";

const Summary = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.name || "Trader"}!</h6>
        <p style={{ marginBottom: "0.75rem", color: "#6b7280" }}>
          Signed in as {user?.email} ({user?.role})
        </p>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings snapshot</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              Protected <small>{user?.role === "admin" ? "Admin access" : "User access"}</small>
            </h3>
            <p>JWT session active</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Orders route <span>/api/orders</span>
            </p>
            <p>
              Holdings route <span>/api/holdings</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
