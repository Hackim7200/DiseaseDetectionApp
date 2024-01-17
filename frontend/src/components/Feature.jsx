import React from "react";
import pic01 from "../images/plantImg1.jpeg";
import pic02 from "../images/plantImg2.jpeg";
import pic03 from "../images/plantImg3.jpeg";


function Feature() {
  return (
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
                  <h2>Pepermint plant</h2>
                  <p>Maybe here as well I think</p>
                </header>
                <p>
                  Phasellus quam turpis, feugiat sit amet in, hendrerit in
                  lectus. Praesent sed semper amet bibendum tristique fringilla.
                </p>
              </div>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            {/* <!-- Box --> */}
            <section class="box feature">
              <a href="#" class="image featured">
                <img src={pic02} alt="" />
              </a>
              <div class="inner">
                <header>
                  <h2>Pine tree</h2>
                  <p>This is also an interesting subtitle</p>
                </header>
                <p>
                  Phasellus quam turpis, feugiat sit amet in, hendrerit in
                  lectus. Praesent sed semper amet bibendum tristique fringilla.
                </p>
              </div>
            </section>
          </div>
          <div class="col-4 col-12-medium">
            {/* <!-- Box --> */}
            <section class="box feature">
              <a href="#" class="image featured">
                <img src={pic03} alt="" />
              </a>
              <div class="inner">
                <header>
                  <h2>Peace lilly</h2>
                  <p>Here's another intriguing subtitle</p>
                </header>
                <p>
                  Phasellus quam turpis, feugiat sit amet in, hendrerit in
                  lectus. Praesent sed semper amet bibendum tristique fringilla.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
