import React from "react";
import "./About.scss";
import PopUp from "../../components/PopUp/PopUp";

function About() {
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
