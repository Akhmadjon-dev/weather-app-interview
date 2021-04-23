import React from "react";
import { SidebarStyled } from "../styles/main";

export default function Sidebar() {
  return (
    <SidebarStyled>
      <div className="sidebar__top-block">
        <div className="sidebar__head">input search</div>
        <div className="sidebar__img">
          <img srt="#" alt="weather-icon" />
        </div>
        <div className="sidebar__gradus">
          <h3>12</h3>
          <span className="sidebar__gradus-unit">C</span>
        </div>
        <h4 className="sidebar__date">
          Monday, <span className="sidebar__time">15:00</span>
        </h4>
      </div>
      <div className="sidebar__foot">
        <div className="sidebar__row">
          <div className="sidebar__icon">icon</div>
          <div className="sidebar__label">label</div>
        </div>
        <div className="sidebar__row">
          <div className="sidebar__icon">icon</div>
          <div className="sidebar__label">label</div>
        </div>
      </div>
    </SidebarStyled>
  );
}
