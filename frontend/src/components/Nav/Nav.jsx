import React from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuClicked = () => {
  document.querySelector("body").id ="freezeScroll";
  document.querySelector(".popup-menu").style.display = "block";
  document.querySelector('#page-wrapper').style.filter = "blur(5px)"





};

function Nav() {
  return (
    <div className="navbar" >


      <a  className="toggle-button" onClick={menuClicked}>
  
        <FontAwesomeIcon icon={faBars} size="5x" />
      </a>

      <div className="navbar-links">
        <ul>
          <li className="opener">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Something</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Nav;
