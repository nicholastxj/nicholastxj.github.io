import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.css";

const STYLES = ["home-btn-primary", "home-btn-outline"];

const SIZES = ["home-btn-medium", "home-btn-large"];

function HomeButton({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link}>
      <button
        className={`home-btn home-btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default HomeButton;
