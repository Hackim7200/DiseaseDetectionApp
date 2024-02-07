import React, { useState } from "react";
import "./PopUp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function PopUp(props) {

  const popupTitle = props.title

 

  // returns everything to normal when x is clicked
  const closePopup = () => {
    console.log("clicked");
    document.getElementById("overlay").style.display = "none"; // to remove pop-up
    document.body.classList.remove("no-scroll"); // Re-enable scrolling

  };

  return (
    <div id="overlay" className="popup-overlay">
      <div className="popup-window">
        <div className="popup-header">
          <h1 className="popup-title">{popupTitle}</h1>

          <span className="close-btn" onClick={() => closePopup()}>
            <FontAwesomeIcon icon={faX} size="2x" />
          </span>
        </div>
        <div className="popup-content">


        {props.children}
        </div>


      </div>
    </div>
  );
}

export default PopUp;
