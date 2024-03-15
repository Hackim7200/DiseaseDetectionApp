import React from "react";
import "./popupMenu2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function popupMenu2() {
  const closeMenu = () => {
    console.log("close menu");
    document.querySelector(".popup-menu").style.display = "none";
    document.querySelector('#page-wrapper').style.filter = ""
    document.querySelector("body").id ="";

  };


  return (
    <div className="popup-menu">
      <div className="menu-card">
        <div className="close-btn" onClick={closeMenu}>
          <FontAwesomeIcon icon={faX} size="3x" />
        </div>
        <div className="menu-wrapper">
          <ul>
            <li className="opener">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/detect">Detect</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default popupMenu2;
