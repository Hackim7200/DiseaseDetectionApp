import React, { useEffect, useState } from "react";

import pic01 from "../../images/plantImg2.jpeg";
import pic02 from "../../images/plantImg2.jpeg";
import pic03 from "../../images/plantImg3.jpeg";
import "./Detect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PopUp from "../../components/PopUp/PopUp";
import UploadImage from "../../components/UploadImage/UploadImage";
import Axios from 'axios'

function Detect() {
  const [img,setImg] = useState("http://127.0.0.1:8000/media/images/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_OqEgHcX.jpg")


  const getPlantImg  = async ()=>{

    try{

      const response = await Axios.get("http://127.0.0.1:8000/api/plantimage/")
      
      console.log(response.data[0])
      
    }catch(err){

      console.log(err)


    }


  }

  // useEffect(()=>{
  //   getPlantImg


    
  // },[])



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
        <button onClick={()=>{getPlantImg()}}>hellow</button>
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
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section className="box feature">
                    <span className="image featured">
                      <img src={img} alt="" />
                    </span>
                    <div className="inner">
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
              <div className="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section className="box feature">
                    <span className="image featured">
                      <img src={pic01} alt="" />
                    </span>
                    <div className="inner">
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
              <div className="col-4 col-12-medium">
                {/* <!-- Box --> */}
                <Link
                  style={{ all: "unset" }}
                  to="/analytics"
                  state={{ id: 0 }}
                >
                  <section className="box feature">
                    <span className="image featured">
                      <img src={pic01} alt="" />
                    </span>
                    <div className="inner">
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
