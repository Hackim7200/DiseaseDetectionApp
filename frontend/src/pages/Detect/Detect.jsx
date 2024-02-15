import React, { useState } from "react";

import pic01 from "../../images/plantImg2.jpeg";
import pic02 from "../../images/plantImg2.jpeg";
import pic03 from "../../images/plantImg3.jpeg";
import "./Detect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link, json } from "react-router-dom";
import PopUp from "../../components/PopUp/PopUp";
import UploadImage from "../../components/UploadImage/UploadImage";
import Axios from "axios";

function Detect() {
  function chunkArrayIntoArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

  const host = "http://127.0.0.1:8000";
  const [img, setImg] = useState(
    "http://127.0.0.1:8000/media/images/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_OqEgHcX.jpg"
  );
  const [historyObj, setHistoryObj] = useState([
    {
      id: 5,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_CYcfJHT.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
    {
      id: 6,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_fkC0b9M.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
    {
      id: 7,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_gmGqTre.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
    {
      id: 7,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_gmGqTre.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
    {
      id: 7,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_gmGqTre.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
    {
      id: 7,
      img: "/media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_gmGqTre.jpg",
      name: "jasminum offcinale",
      user: 18,
    },
  ]);

  const processedData = chunkArrayIntoArray(historyObj, 3);
  console.log(processedData);

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
        <button
          onClick={() => {
            getPlantImg();
          }}
        >
          hellow
        </button>
        <div id="banner" className="box container">
          <div className="row">
            <div className="col-7 col-12-medium">
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
          <div className="container">
            {processedData.map((obj, index) => (
              <div className="row">
                {obj.map((data, index) => (
                  <div className="col-4 col-12-medium" style={{marginBottom:"1rem"}}>
                    <Link
                      style={{ all: "unset" }}
                      to="/analytics"
                      state={{ id: data.id }}
                    >
                      <section className="box feature">
                        <span className="image featured">
                          <img src={host + data.img} alt="" />
                        </span>
                        <div className="inner">
                          <header>
                            <h2>{data.name}</h2>
                            <p>Maybe here as well I think</p>
                          </header>
                          <p>
                            Phasellus quam turpis, feugiat sit amet in,
                            hendrerit in lectus. Praesent sed semper amet
                            bibendum tristique fringilla.
                          </p>
                        </div>
                      </section>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detect;
