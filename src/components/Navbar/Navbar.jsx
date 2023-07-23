import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";
import HomeButton from "../Home/HomeButton/HomeButton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navSidebarButton, setNavSidebarButton] = useState(true);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeNavSidebar = () => setClick(false);

  const showNavSidebarButton = () => {
    if (window.innerWidth <= 960) {
      setNavSidebarButton(false);
    } else {
      setNavSidebarButton(true);
    }
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log("Failed to log out: " + error.message);
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    showNavSidebarButton();
  }, []);

  window.addEventListener("resize", showNavSidebarButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Website Logo */}
          <Link to="/" className="navbar-logo" onClick={closeNavSidebar}>
            <i class="fa-solid fa-cat" />
            CatConnect
          </Link>

          <div className="nav-sidebar-btn" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu nav-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeNavSidebar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeNavSidebar}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeNavSidebar}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeNavSidebar}
              >
                Profile
              </Link>
            </li>
            <li>
              {currentUser ? (
                <Link
                  className="nav-links-sidebar"
                  onClick={() => {
                    handleLogout();
                    closeNavSidebar();
                  }}
                >
                  LOG OUT
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav-links-sidebar"
                  onClick={closeNavSidebar}
                >
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
          {currentUser
            ? navSidebarButton && (
                <HomeButton
                  buttonStyle="home-btn-outline"
                  onClick={handleLogout}
                >
                  LOG OUT
                </HomeButton>
              )
            : navSidebarButton && (
                <HomeButton buttonStyle="home-btn-outline" link="/login">
                  LOG IN
                </HomeButton>
              )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
