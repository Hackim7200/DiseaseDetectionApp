import React from "react";
import "./Analytics.scss";
import { Link } from "react-router-dom";
import pic from "../../images/plantImg1.jpeg";
import pic0 from "../../images/plantImg1.jpeg";
import pic1 from "../../images/plantImg1.jpeg";
import pic2 from "../../images/plantImg1.jpeg";
import pic3 from "../../images/plantImg1.jpeg";
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();
  const { id } = location.state;

  return (
    <>
      <div id="banner-wrapper">
        <div id="banner" className="box container">
          <div className="row">
            <div className="container">
              <div className="row gtr-200">
                <div className="col-4 col-12-medium">
                  <div id="sidebar" className="sidebar-img">
                    <img src={pic} />
                  </div>
                </div>
                <div className="col-8 col-12-medium imp-medium">
                  <div id="content">
                    <section className="last">
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
      <div className="card-wrapper">
        <div className="leaf-analysis-card">
          <div className="fixed-width">
            <span className="img-span">
              <img src={pic} alt="" />
            </span>
          </div>
          <div className="flexible-width">
            <h2>Leaf 1: Rust</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quo quaerat optio qui earum eaque placeat aperiam, voluptatem fuga
              quia consequatur iusto illo, beatae ad molestias nam quibusdam
              obcaecati reprehenderit!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quo quaerat optio qui earum eaque placeat aperiam, voluptatem fuga
              quia consequatur iusto illo, beatae ad molestias nam quibusdam
              obcaecati reprehenderit!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quo quaerat optio qui earum eaque placeat aperiam, voluptatem fuga
              quia consequatur iusto illo, beatae ad molestias nam quibusdam
              obcaecati reprehenderit!
            </p>
          </div>
          <div className="fixed-width">
            <h2 className="text-percent">90%</h2>
          </div>
        </div>
      </div>

      <div id="main-wrapper">
        <div className="container">
          <div className="row gtr-200">
            <div className="col-4 col-12-medium">
              {/* <!-- Sidebar --> */}
              <div id="sidebar">
                <section className="widget thumbnails">
                  <h3>Overview</h3>
                  <div className="grid">
                    <div className="row gtr-50">
                      <div className="col-6">
                        <span  className="image fit">
                          <img src={pic} alt="" />
                        </span>               </div>
                      <div className="col-6">
                        <span  className="image fit">
                          <img src={pic} alt="" />
                        </span>               </div>
                      <div className="col-6">
                        <span  className="image fit">
                          <img src={pic} alt="" />
                        </span>               </div>
                      <div className="col-6">
                        <span className="image fit">
                          <img src={pic} alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-8 col-12-medium imp-medium">
              {/* <!-- Content --> */}
              <div id="content">
                <section className="last">
                  <h2>Summary</h2>
                  <p>
                    This is <strong>Verti</strong>, a free and fully responsive
                    HTML5 site template 
             
                    , so feel free to use it for any personal or commercial
                    project you might have going on (just don't forget to credit
                    us for the design!)
                  </p>
                  <p>
                    Phasellus quam turpis, feugiat sit amet ornare in, hendrerit
                    in lectus. Praesent semper bibendum ipsum, et tristique
                    augue fringilla eu. Vivamus id risus vel dolor auctor
                    euismod quis eget mi. Etiam eu ante risus. Aliquam erat
                    volutpat. Aliquam luctus mattis lectus sit amet phasellus
                    quam turpis.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* i could maybe put summary at the end with likely diease using the main feature component */}
    </>
  );
}

export default Analytics;
