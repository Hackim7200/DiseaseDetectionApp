import React from "react";
import "./About.scss";
import PopUp from "../../components/PopUp/PopUp";
import Axios from "axios";

function About() {

  const checkCookie = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:8000/api/is_cookie_valid/', {
          withCredentials: true // Important for sending cookies
      });
      
      // Process the response data
      console.log(response.data);
  } catch (error) {
      // Handle any errors here
      console.error("There was an error!", error);
      // Optionally, handle different types of errors differently
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Problem with response", error.response.status);
      } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received", error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
      }
  }

    
    

  };

  return (
    <>
      {/* <PopUp title="About us">

		<button>new things</button>


	</PopUp> */}

      <div id="banner-wrapper">
        <div id="banner" className="box container">
          <div className="row">
            <div className="col-7 col-12-medium">
              <h2>About us</h2>
            </div>
            <button onClick={()=>checkCookie()}>Check cookie</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              dolores quis aut, voluptas voluptatem sapiente natus aspernatur
              nisi iste. Tenetur possimus cumque esse officiis quos modi autem
              tempora ipsam molestiae!
            </p>
            {/* <div className="col-5 col-12-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi unde saepe fugiat, similique illo cum, vero, et nam molestias nulla impedit deleniti veniam in cupiditate placeat commodi explicabo error?
						
							</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
