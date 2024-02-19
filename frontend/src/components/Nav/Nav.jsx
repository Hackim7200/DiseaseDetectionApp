import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const menuClicked = () => {
  document.querySelector("body").id = "freezeScroll";
  document.querySelector(".popup-menu").style.display = "block";
  document.querySelector("#page-wrapper").style.filter = "blur(5px)";
};

function Nav() {

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <div className="navbar">
      <a className="toggle-button" onClick={menuClicked}>
        <FontAwesomeIcon icon={faBars} size="5x" />
      </a>

      <div className="navbar-links">
        <ul>
          <li className="opener">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/detect">Detect</Link>
          </li>

          {loggedIn ? (
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
