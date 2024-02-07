import React, { useState } from "react";

import pic01 from "../../images/plantImg2.jpeg";
import pic02 from "../../images/plantImg2.jpeg";
import pic03 from "../../images/plantImg3.jpeg";
import "./Detect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PopUp from "../../components/PopUp/PopUp";
import UploadImage from "../../components/UploadImage/UploadImage";

function Detect() {
  const pop = () => {
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("no-scroll"); // Re-enable scrolling

  };

  return (
    <>

    <form action="submit">  
      <PopUp>
        <FontAwesomeIcon icon={faCamera} size="5x" />
        <UploadImage />
      </PopUp>
    </form>

      <div id="banner-wrapper">
        <div id="banner" class="box container">
          <div class="row">
            <div class="col-7 col-12-medium">
              <h2>Detect</h2>
            </div>
            <p>
              Here you can search previous detection history or detect new
              plants & diseases
            </p>
          </div>
        </div>
      </div>

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
            <span
              onClick={() => {
                pop();
              }}
            >
              <FontAwesomeIcon icon={faCamera} size="4x" />
            </span>
          </div>
        </div>

        {/* // <!-- Features --> */}

        <div id="features-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section class="box feature">
                    <span class="image featured">
                      <img src={pic01} alt="" />
                    </span>
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
                </Link>
              </div>
              <div class="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section class="box feature">
                    <span class="image featured">
                      <img src={pic01} alt="" />
                    </span>
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
                </Link>
              </div>
              <div class="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section class="box feature">
                    <span class="image featured">
                      <img src={pic01} alt="" />
                    </span>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detect;
