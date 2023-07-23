import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./ProfileUpdate.css";

function ProfileUpdate() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateAccountEmail, updateAccountPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      const promises = [];
      setLoading(true);
      setError("");

      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateAccountEmail(emailRef.current.value));
      }

      if (passwordRef.current.value) {
        promises.push(updateAccountPassword(passwordRef.current.value));
      }

      await Promise.all(promises);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/requires-recent-login") {
        setError("You need to log in again to perform this operation");
      } else {
        setError("Failed to update account");
      }
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <h2 className="auth-heading">Update Profile</h2>
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
              defaultValue={currentUser && currentUser.email}
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
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="auth-input-container">
            <label htmlFor="password-confirm" className="auth-input-label">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password-confirm"
              className="auth-input"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <button
            disabled={loading}
            className="auth-btn auth-btn-primary"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <div className="auth-link">
        <Link to="/profile">Cancel</Link>
      </div>
    </div>
  );
}

export default ProfileUpdate;
