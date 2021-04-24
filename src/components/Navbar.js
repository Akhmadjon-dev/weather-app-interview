import React from "react";
import { NavbarStyled } from "../styles/main";

function Navbar() {
  return (
    <NavbarStyled>
      <ul className="navbar__tabs-time">
        <li className="navbar__tab">Today</li>
        <li className="navbar__tab">Week</li>
      </ul>
      <ul className="navbar__tabs-unit">
        <li className="navbar__unit-tab">
          <sub className="navbar__gradus-symbol">&#9900;</sub>C
        </li>
        <li className="navbar__unit-tab">
          <sub className="navbar__gradus-symbol">&#9900;</sub>F
        </li>
      </ul>
    </NavbarStyled>
  );
}

export default Navbar;
