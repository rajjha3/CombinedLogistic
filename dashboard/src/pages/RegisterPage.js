import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";
import "./AuthPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordsMatch = useMemo(
    () => !formData.confirmPassword || formData.password === formData.confirmPassword,
    [formData.confirmPassword, formData.password]
  );

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!passwordsMatch) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate("/", { replace: true });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Unable to create account.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-layout">
      <div className="auth-panel">
        <h1>Create dashboard account</h1>
        <p>Register to unlock the protected stock dashboard and secure trading endpoints.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Full name
            <input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label htmlFor="email">
            Email address
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label htmlFor="password">
            Password
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} minLength="6" required />
          </label>

          <label htmlFor="confirmPassword">
            Confirm password
            <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} minLength="6" required />
          </label>

          <button type="submit" disabled={isSubmitting || !passwordsMatch}>
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>

        {status.message ? <div className={`auth-notice ${status.type}`}>{status.message}</div> : null}

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
