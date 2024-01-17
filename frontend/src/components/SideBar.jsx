import React from 'react'
import pic04 from "../images/pic04.jpg";
import pic05 from "../images/pic05.jpg";
import pic06 from "../images/pic06.jpg";
import pic07 from "../images/pic07.jpg";
function SideBar() {
  return (
    <div id="sidebar">
              <section class="widget thumbnails">
                <h3>Interesting stuff</h3>
                <div class="grid">
                  <div class="row gtr-50">
                    <div class="col-6">
                      <a href="#" class="image fit">
                        <img src={pic04} alt="" />
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="#" class="image fit">
                        <img src={pic05} alt="" />
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="#" class="image fit">
                        <img src={pic06} alt="" />
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="#" class="image fit">
                        <img src={pic07} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" class="button icon fa-file-alt">
                  More
                </a>
              </section>
            </div>
  )
}

export default SideBar