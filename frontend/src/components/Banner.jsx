import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div id="banner-wrapper">
      <div id="banner" className="box container">
        <div className="row">
          <div className="col-7 col-12-medium">
            <h2>LeafLense a plant disease detection App.</h2>
            <p>
              analyse you’r plant health with instant feedback and analytics
            </p>
          </div>
          <div className="col-5 col-12-medium">
            <ul>
              <li>
                <Link to="/detect" className="button large icon solid fa-camera">
                  let's Detect
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="button alt large icon solid fa-question-circle"
                >
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
