import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./Authentication.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to create an account: " + error.message);
      switch (error.code) {
        case "auth/weak-password":
          setError("Password should be at least 6 characters long");
          break;
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        default:
          setError("Failed to create an account");
      }
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <h2 className="auth-heading">Sign Up</h2>
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
          <div className="auth-input-container">
            <label htmlFor="password-confirm" className="auth-input-label">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password-confirm"
              className="auth-input"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className="auth-btn auth-btn-primary"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="auth-link">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default SignUp;
