import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>
        Oopsies! The page you are trying to find doesn't seem to exist{" "}
        <i class="fa-solid fa-skull" />
      </h1>
      <h2>Redirecting you to the home page...</h2>
      <p>
        If you are not automatically redirected in 5s, click{" "}
        <Link to="/">here</Link>
      </p>
    </div>
  );
}

export default NotFound;
