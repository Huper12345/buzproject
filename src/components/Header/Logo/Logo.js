import React from "react";
import "./Logo.scss";
import { Link, animateScroll as scroll } from "react-scroll";

export const Logo = ({logoImage, alt="Logo", className="Logo-Img", width="220px", height="48px"}) => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        to="Intro"
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
