import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div id="banner-wrapper">
      <div id="banner" class="box container">
        <div class="row">
          <div class="col-7 col-12-medium">
            <h2>LeafLense a plant disease detection App.</h2>
            <p>analyse you’r plant health with instant feedback and analytics</p>
          </div>
          <div class="col-5 col-12-medium">
            <ul>
              <li>
                <Link
                  to="home"
                  class="button large icon solid fa-camera"
                >
                  let's Detect
                </Link>
              </li>
              <li>
              <Link to="about"  class="button alt large icon solid fa-question-circle">
              More info

              </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
