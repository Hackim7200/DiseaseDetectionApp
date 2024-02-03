import React from "react";
import "./Analytics.scss";
import { Link } from "react-router-dom";
import pic from "../../images/plantImg1.jpeg";
import { useLocation } from 'react-router-dom'



function Analytics() {
  const location = useLocation()
  const { id } = location.state


  return (
    <>
      <div id="banner-wrapper">
        <div id="banner" className="box container">
          <div className="row">
       

            <div class="container">
              <div class="row gtr-200">
                <div class="col-4 col-12-medium">
                  <div id="sidebar" className="sidebar-img">
                    <img src={pic} />
                  </div>
                </div>
                <div class="col-8 col-12-medium imp-medium">
                  <div id="content">
                    <section class="last">
                      <h2>id:{id} Jasmine Officinale</h2>
                      <p>Plant Health Analytics for Jasmine Offcinale</p>
                      <p>
                        <strong>Most probable diseases:</strong>
                      </p>

                      <label className="disease-label">
                        1. Ahid infestation
                      </label>
                      <br />
                      <label className="disease-label">
                        2. Ahid infestation
                      </label>
                      <br />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  

      <div className="leaf-analysis-card">
        <div className="fixed-width">
          <span className="img-span">
            <img src={pic} alt="" />
          </span>
        </div>
        <div className="flexible-width">
          <h2>Leaf 1: Rust</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quo
            quaerat optio qui earum eaque placeat aperiam, voluptatem fuga quia
            consequatur iusto illo, beatae ad molestias nam quibusdam obcaecati
            reprehenderit!
          </p>
        </div>
        <div className="fixed-width">
          <h2 className="text-percent">90%</h2>
        </div>
      </div>

      <div className="leaf-analysis-card">
        <div className="fixed-width">
          <span className="img-span">
            <img src={pic} alt="" />
          </span>
        </div>
        <div className="flexible-width">
          <h2>Leaf 1: Rust</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quo
            quaerat optio qui earum eaque placeat aperiam, voluptatem fuga quia
            consequatur iusto illo, beatae ad molestias nam quibusdam obcaecati
            reprehenderit!
          </p>
        </div>
        <div className="fixed-width">
          <h2 className="text-percent">90%</h2>
        </div>
      </div>
      <div className="leaf-analysis-card">
        <div className="fixed-width">
          <span className="img-span">
            <img src={pic} alt="" />
          </span>
        </div>
        <div className="flexible-width">
          <h2>Leaf 1: Rust</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quo
            quaerat optio qui earum eaque placeat aperiam, voluptatem fuga quia
            consequatur iusto illo, beatae ad molestias nam quibusdam obcaecati
            reprehenderit!
          </p>
        </div>
        <div className="fixed-width">
          <h2 className="text-percent">90%</h2>
        </div>
      </div>



      {/* i could maybe put summary at the end with likely diease using the main feature component */}
    </>
  );
}

export default Analytics;
