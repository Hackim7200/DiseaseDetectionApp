import React from "react";
import "./MenuPopup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function MenuPopup() {

  const closeMenu = () => {
    console.log("close menu");
    document.querySelector(".menu-card").style.display = "none";
    // document.querySelector("body").id=""




   






   



  };
  return (
    <div className="menu-popup">

      <div className="menu-content">
        <div className="close-btn" onClick={closeMenu}>
          <FontAwesomeIcon icon={faX} size="3x" />
        </div>
        <div className="menu-wrapper">
          <ul>
            <li className="opener">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">detect</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
