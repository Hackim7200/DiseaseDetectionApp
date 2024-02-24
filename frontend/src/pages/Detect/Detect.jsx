import React, { useContext, useEffect, useState } from "react";

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
import { LoginContext } from "../../context/Context";




function Detect() {
  // const { logged, setLogged } = useContext(LoginContext);


  
  function putArrayIntoGroups(array, chunkSize) {
    const chunkedArray = [];

    if(array.length===0)return chunkedArray;
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

  const host = "http://127.0.0.1:8000";

  const [historyObj, setHistoryObj] = useState([]);
  console.log(historyObj)



  const getHistoryData = async () => {
    try {
      const response = await Axios.get(
        "http://127.0.0.1:8000/api/plant_history/",
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      setHistoryObj(putArrayIntoGroups(response.data, 3));

      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getHistoryData();
  }, []);

  const pop = () => {
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("no-scroll"); // Re-enable scrolling
  };

  return (
    <>

        <PopUp>
          <FontAwesomeIcon icon={faCamera} size="5x" />
          <UploadImage />
        </PopUp>


      <div id="banner-wrapper">
    
        <div id="banner" className="box container">
          <div className="row">
            <div className="col-7 col-12-medium">
              <h2>Detect </h2>
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
            {historyObj.length === 0 ? (
              <p>The array is empty.</p>
            ) : (
              <>
                {historyObj.map((obj, index) => (
                  <div className="row" key={index}>
                    {obj.map((data, index1) => (
                      <div
                        className="col-4 col-12-medium"
                        style={{ marginBottom: "1rem" }}
                        key={index1}
                      >
                        <Link
                          style={{ all: "unset" }}
                          to="/analytics"
                          state={{ 
                            id: data.id,
                            mainImg: host + data.img
                           }}
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
                                {data.message}
                              </p>
                            </div>
                          </section>
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detect;
