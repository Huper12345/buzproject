import React from "react";
import "./Logo.scss";
import { Link, animateScroll as scroll } from "react-scroll";

export const Logo = ({logoImage, alt="Logo", className="Logo-Img", width="200px", height="45px", to="Intro"}) => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        to={to}
        smooth={true}
        offset={-70}
        duration={600}
      >
        <img
          src={logoImage}
          alt={alt}
          className={className}
          width={width}
          height={height}
        ></img>
      </Link>
    </div>
  );
};
