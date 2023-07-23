import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Authentication.css";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions! :)");
    } catch (error) {
      console.log("Failed to reset password: " + error.message);
      setError("Failed to reset password");
    }

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions! :)");
    } catch (error) {
      console.log("Failed to reset password: " + error.message);
      switch (error.code) {
        case "auth/user-not-found":
          setError("Account not found - Please check your email address");
          break;
        default:
          setError("Failed to reset password");
      }
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <h2 className="auth-heading">Reset Password</h2>
        {error && <div className="auth-alert auth-alert-danger">{error}</div>}
        {message && (
          <div className="auth-alert auth-alert-success">{message}</div>
        )}
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
          <button
            disabled={loading}
            className="auth-btn auth-btn-primary"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        <div className="auth-container-link">
          <Link to="/login">Proceed to Login</Link>
        </div>
      </div>
      <div className="auth-link">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
