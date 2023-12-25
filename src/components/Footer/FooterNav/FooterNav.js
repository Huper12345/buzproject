import React from "react";
import "./FooterNav.scss";

import { Link, animateScroll as scroll } from "react-scroll";

export const FooterNav = (
  {
  href1,
  text1,
  href2,
  text2,
  href3,
  text3,
  href4,
  text4,
  }
) => {
  return (
    <nav className="Footer-Nav">
      <Link
        to={href1}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text1}
      </Link>

      <Link
        to={href2}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text2}
      </Link>

      <Link
        to={href3}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        {text3}
      </Link>

      <a className="Footer-Nav-Link" href={href4} target="blank">
        {text4}
      </a>
    </nav>
  );
};
