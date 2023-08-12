import React from "react";
import SearchBar from "../../search-bar/SearchBar";
import { RiMenuFill, RiNotification2Line } from "react-icons/ri";

const listmenu = ["inicio", "series", "peliculas", "mi Lista", "novedades"];
const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <h1 className="logo">
        start <span>raona</span>
      </h1>
      <div className="constainer-menu">
        <button className="button-menu">
          <RiMenuFill />
        </button>
        <ul className="list-menu">
          {listmenu.map((item, index) => (
            <li className="tab" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <SearchBar></SearchBar>
      <div className="subcontainer">
        <span className="notification">
          <RiNotification2Line />
          <span className="alert">.</span>
        </span>
        <span className="avatar">JC</span>
      </div>
    </div>
  );
};

export default NavBar;
