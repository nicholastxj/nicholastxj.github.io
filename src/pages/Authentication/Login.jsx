import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Authentication.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to log in: " + error.message);
      switch (error.code) {
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/user-not-found":
          setError("Account not found - Please check your email address");
          break;
        default:
          setError("Failed to log in");
      }
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <h2 className="auth-heading">Log In</h2>
        {error && <div className="auth-alert auth-alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="auth-input-container">
            <label htmlFor="email" className="auth-input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              ref={emailRef}
              required
            />
          </div>
          <div className="auth-input-container">
            <label htmlFor="password" className="auth-input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="auth-input"
              ref={passwordRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className="auth-btn auth-btn-primary"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="auth-container-link">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
      <div className="auth-link">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
