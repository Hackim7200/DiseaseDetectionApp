import React from "react";

import pic01 from "../../images/plantImg2.jpeg";
import pic02 from "../../images/plantImg2.jpeg";
import pic03 from "../../images/plantImg3.jpeg";
import "./Detect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

FontAwesomeIcon;

function Detect() {
  return (
    <div className="detectPageWrapper">
      {/* <input className='searchBar' type="text" /> */}
      <div className="search-box">
       <div>
       <input
          name="search"
          type="text"
          placeholder="Jasminum officinale"
          required
        />
        <span><FontAwesomeIcon icon={faCamera} size="4x"  /></span>
       </div>
      </div>

      {/* // <!-- Features --> */}
      <div id="features-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              {/* <!-- Box --> */}
              <section class="box feature">
                <a href="#" class="image featured">
                  <img src={pic01} alt="" />
                </a>
                <div class="inner">
                  <header>
                    <h2>Put something here</h2>
                    <p>Maybe here as well I think</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in
                    lectus. Praesent sed semper amet bibendum tristique
                    fringilla.
                  </p>
                </div>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              {/* <!-- Box --> */}
              <section class="box feature">
                <a href="#" class="image featured">
                  <img src={pic01} alt="" />
                </a>
                <div class="inner">
                  <header>
                    <h2>An interesting title</h2>
                    <p>This is also an interesting subtitle</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in
                    lectus. Praesent sed semper amet bibendum tristique
                    fringilla.
                  </p>
                </div>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              {/* <!-- Box --> */}
              <section class="box feature">
                <a href="#" class="image featured">
                  <img src={pic01} alt="" />
                </a>
                <div class="inner">
                  <header>
                    <h2>Oh, and finally ...</h2>
                    <p>Here's another intriguing subtitle</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in
                    lectus. Praesent sed semper amet bibendum tristique
                    fringilla.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detect;
