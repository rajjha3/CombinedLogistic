import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../../api/authApi";
import { setStoredAuth } from "../../auth/storage";
import { getDashboardUrl } from "../../config";
import "./AuthPage.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });
      const response = await loginUser(formData);
      setStoredAuth(response.data);
      window.location.assign(getDashboardUrl("/"));
      return;
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
    <section className="auth-shell">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Login with your account to access protected broker routes.</p>

        <form className="auth-form" onSubmit={handleLogin}>
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

        {status.message ? (
          <div className={`auth-feedback ${status.type}`}>{status.message}</div>
        ) : null}
    <br />
        <button
          type="button"
          className="auth-link-button"
          onClick={() => window.location.assign(getDashboardUrl("/"))}
        >
          Open dashboard
        </button>

        <p className="auth-footer">
          Need an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
