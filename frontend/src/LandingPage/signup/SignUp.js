import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser, registerUser } from "../../api/authApi";
import { setStoredAuth } from "../../auth/storage";
import { getDashboardUrl } from "../../config";
import "../auth/AuthPage.css";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginView = location.pathname === "/login";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordsMatch = useMemo(
    () =>
      isLoginView ||
      !formData.confirmPassword ||
      formData.password === formData.confirmPassword,
    [formData.confirmPassword, formData.password, isLoginView]
  );

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleModeChange = (mode) => {
    setStatus({ type: "", message: "" });
    navigate(mode === "login" ? "/login" : "/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLoginView && !passwordsMatch) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      const response = isLoginView
        ? await loginUser({
            email: formData.email,
            password: formData.password,
          })
        : await registerUser({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });

      setStoredAuth(response.data);
      window.location.assign(getDashboardUrl("/"));
      return;
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          (isLoginView ? "Unable to login." : "Unable to create account."),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <div className="auth-mode-toggle" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            className={`auth-mode-button ${!isLoginView ? "active" : ""}`}
            onClick={() => handleModeChange("signup")}
          >
            Create account
          </button>
          <button
            type="button"
            className={`auth-mode-button ${isLoginView ? "active" : ""}`}
            onClick={() => handleModeChange("login")}
          >
            Login
          </button>
        </div>

        <h1>{isLoginView ? "Login to continue" : "Create your account"}</h1>
        <p>
          {isLoginView
            ? "Sign in with your email and password to open the broker dashboard."
            : "Sign up once, then use the same screen whenever you need to login again."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLoginView ? (
            <label htmlFor="name">
              Full name
              <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </label>
          ) : null}

          <label htmlFor="email">
            Email address
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label htmlFor="password">
            Password
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} minLength="6" required />
          </label>

          {!isLoginView ? (
            <label htmlFor="confirmPassword">
              Confirm password
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength="6"
                required
              />
            </label>
          ) : null}

          <button type="submit" disabled={isSubmitting || !passwordsMatch}>
            {isSubmitting
              ? isLoginView
                ? "Signing in..."
                : "Creating account..."
              : isLoginView
                ? "Login"
                : "Create account"}
          </button>
        </form>

        {status.message ? (
          <div className={`auth-feedback ${status.type}`}>{status.message}</div>
        ) : null}

        <button
          type="button"
          className="auth-link-button"
          onClick={() => window.location.assign(getDashboardUrl("/"))}
        >
          Open dashboard
        </button>

        <p className="auth-footer">
          {isLoginView ? "Need an account? " : "Already have an account? "}
          <button
            type="button"
            className="auth-inline-link"
            onClick={() => handleModeChange(isLoginView ? "signup" : "login")}
          >
            {isLoginView ? "Create account" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default SignUp;