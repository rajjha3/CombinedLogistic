import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";
import "./AuthPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });
      await login(formData);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Unable to login.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-layout">
      <div className="auth-panel">
        <h1>Login to dashboard</h1>
        <p>Authenticated users can access orders, holdings, positions, and protected broker routes.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email address
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label htmlFor="password">
            Password
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        {status.message ? <div className={`auth-notice ${status.type}`}>{status.message}</div> : null}

        <p className="auth-switch">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
