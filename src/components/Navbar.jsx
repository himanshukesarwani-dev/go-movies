import React from "react";
import searchIcon from "../assets/search-icon.webp";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="nav-heading">Go Cinema</h1>
        <div>
          <input className="search-bar" />
          <img src={searchIcon} id="searchIcon" />
        </div>
      </nav>
    </>
  );
}

export { Navbar };
