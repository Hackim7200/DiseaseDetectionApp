import React, { useEffect, useState } from "react";
import "./Analytics.scss";
import { Link, Navigate } from "react-router-dom";
import pic from "../../images/plantImg1.jpeg";
import pic0 from "../../images/plantImg1.jpeg";
import pic1 from "../../images/plantImg1.jpeg";
import pic2 from "../../images/plantImg1.jpeg";
import pic3 from "../../images/plantImg1.jpeg";
import { useLocation } from "react-router-dom";
import Axios from "axios";

function Analytics() {
  const host = "http://127.0.0.1:8000";
  const [historyObj, setHistoryObj] = useState([]);

  const location = useLocation();
  if (!location.state) {
    // Redirect to a default route if location.state is null
    return <Navigate to="/detect" />;
  }
  const { id, mainImg } = location.state;

  const getHistoryData = async () => {
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        "http://127.0.0.1:8000/api/yolo_images/",
        formData,
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      setHistoryObj(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHistoryData();
  }, []);

  return (
    <>
      <div id="banner-wrapper">
        <div id="banner" className="box container">
          <div className="row">
            <div className="container">
              <div className="row gtr-200">
                <div className="col-4 col-12-medium">
                  <div id="sidebar" className="sidebar-img">
                    <img src={mainImg} />
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
        {historyObj.length === 0 && <p>Array is empty </p>}

        {historyObj.map((obj, index) => (
          <div className="leaf-analysis-card">
            <div className="fixed-width">
              <span className="img-span">
                <img src={host + obj.img} alt="" />
              </span>
            </div>

            <div className="flexible-width">
              <h2>
                Leaf {index}: {obj.disease}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                quo quaerat optio qui earum eaque placeat aperiam, voluptatem
                fuga quia consequatur iusto illo, beatae ad molestias nam
                quibusdam obcaecati reprehenderit!
              </p>
            </div>
            <div className="fixed-width">
              <h2 className="text-percent">{obj.percentage}</h2>
            </div>
          </div>
        ))}
      </div>

      <div id="main-wrapper">
        <div className="container">
          <div className="row gtr-200">
            <div className="col-4 col-12-medium">
              {/* <!-- Sidebar --> */}
              <div id="sidebar">
                <section className="widget thumbnails">
                  <h3>Overview</h3>

                  {historyObj.length >= 4 && (
                    <div className="grid">
                      <div className="row gtr-50">
                        <div className="col-6">
                          <span className="image fit">
                            <img src={host + historyObj[0].img} alt="" />
                          </span>{" "}
                        </div>
                        <div className="col-6">
                          <span className="image fit">
                            <img src={host + historyObj[1].img} alt="" />
                          </span>{" "}
                        </div>
                        <div className="col-6">
                          <span className="image fit">
                            <img src={host + historyObj[2].img} alt="" />
                          </span>{" "}
                        </div>
                        <div className="col-6">
                          <span className="image fit">
                            <img src={host + historyObj[3].img} alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
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
                    HTML5 site template , so feel free to use it for any
                    personal or commercial project you might have going on (just
                    don't forget to credit us for the design!)
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
