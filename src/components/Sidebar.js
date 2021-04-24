import React, { useState } from "react";
import { SidebarStyled } from "../styles/main";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/plus.svg";
export default function Sidebar() {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <SidebarStyled>
      <div className="sidebar__top-block">
        <form onSubmit={submitHandler} className="sidebar__head">
          <SearchIcon className="sidebar__search-icon" />
          <input
            value={query}
            className="sidebar__search-input"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for places ... "
          />
          <CloseIcon
            onClick={() => setQuery("")}
            className="sidebar__close-icon"
          />
        </form>
        <div className="sidebar__img">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather-icon"
          />
        </div>
        <div className="sidebar__gradus">
          12
          <span className="sidebar__gradus-unit">
            <sup className="navbar__gradus-symbol">&#9900;</sup>C
          </span>
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
        <div className="sidebar__country-img">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/23/22/people-2597454__340.jpg"
            alt="country"
          />
        </div>
      </div>
    </SidebarStyled>
  );
}
