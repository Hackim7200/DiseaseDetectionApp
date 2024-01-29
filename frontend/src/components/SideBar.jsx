import React from 'react'
import pic04 from "../images/pic04.jpg";
import pic05 from "../images/pic05.jpg";
import pic06 from "../images/pic06.jpg";
import pic07 from "../images/pic07.jpg";
function SideBar() {
  return (
    <div id="sidebar">
              <section className="widget thumbnails">
                <h3>Interesting stuff</h3>
                <div className="grid">
                  <div className="row gtr-50">
                    <div className="col-6">
                      <a href="#" className="image fit">
                        <img src={pic04} alt="" />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="#" className="image fit">
                        <img src={pic05} alt="" />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="#" className="image fit">
                        <img src={pic06} alt="" />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="#" className="image fit">
                        <img src={pic07} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" className="button icon fa-file-alt">
                  More
                </a>
              </section>
            </div>
  )
}

export default SideBar