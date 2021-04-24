import React, { useState } from "react";
import { NavbarStyled } from "../styles/main";

function Navbar() {
  const [activeTime, setActiveTime] = useState(1);
  const [activeUnit, setActiveUnit] = useState(1);

  // it style of creating tabs or list which one of them might be active
  const timeList = [
    { title: "Today", class: "navbar__tab", index: 1 },
    { title: "Week", class: "navbar__tab", index: 2 },
  ];

  return (
    <NavbarStyled>
      <ul className="navbar__tabs-time">
        {timeList.map((item) => (
          <li
            onClick={() => setActiveTime(item.index)}
            key={item.index}
            className={
              item.index === activeTime
                ? `${item.class + " navbar__tab--active"}`
                : item.class
            }
          >
            {item.title}
          </li>
        ))}
      </ul>
      <ul className="navbar__tabs-unit">
        <li
          onClick={() => setActiveUnit(1)}
          className={
            activeUnit === 1
              ? "navbar__unit-tab navbar__unit-tab--active"
              : "navbar__unit-tab"
          }
        >
          <sup className="navbar__gradus-symbol">&#9900;</sup>C
        </li>
        <li
          onClick={() => setActiveUnit(2)}
          className={
            activeUnit === 2
              ? "navbar__unit-tab navbar__unit-tab--active"
              : "navbar__unit-tab"
          }
        >
          <sup className="navbar__gradus-symbol">&#9900;</sup>F
        </li>
      </ul>
    </NavbarStyled>
  );
}

export default Navbar;
