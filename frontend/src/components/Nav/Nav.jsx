import React from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const menuClicked = () => {
  document.querySelector("body").id = "freezeScroll";
  document.querySelector(".popup-menu").style.display = "block";
  document.querySelector("#page-wrapper").style.filter = "blur(5px)";
};

function Nav() {
  return (
    <div className="navbar">
      <a className="toggle-button" onClick={menuClicked}>
        <FontAwesomeIcon icon={faBars} size="5x" />
      </a>

      <div className="navbar-links">
        <ul>
          <li className="opener">
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to="/detect">Detect</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Nav;
