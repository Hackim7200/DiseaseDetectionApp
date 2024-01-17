import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeaf} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";


function Logo() {
  return (
    <div id="logo">
      <h1>
        <Link to="/">LeafLense</Link>

      </h1>
      <span><FontAwesomeIcon icon={faLeaf} size = '4x' /></span>
    </div>
  );
}

export default Logo;
