import React from "react";
import { Link } from "react-router-dom";

function HeroCard(props) {
  return (
    <>
      <li className="hero-card">
        <Link className="hero-card-link" to={props.path}>
          <figure className="hero-card-img-wrapper" data-category={props.label}>
            <img className="hero-card-img" alt="alt" src={props.src} />
          </figure>
          <div className="hero-card-info">
            <h5 className="hero-card-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default HeroCard;
