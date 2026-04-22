import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiClient } from "../api/client";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await apiClient.get("/orders");
        setOrders(response.data);
        setStatus({ loading: false, error: "" });
      } catch (error) {
        setStatus({
          loading: false,
          error: error.response?.data?.message || "Unable to load orders.",
        });
      }
    };

    loadOrders();
  }, []);

  if (status.loading) {
    return <p>Loading orders...</p>;
  }

  if (status.error) {
    return <p className="loss">{status.error}</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You have not placed any orders yet.</p>
          <Link to="/" className="btn">
            Go to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-table">
      <h3 className="title">Orders ({orders.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Mode</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Placed at</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.mode}</td>
              <td>{order.qty}</td>
              <td>{Number(order.price).toFixed(2)}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
