import React from "react";

import Content from "./Content";
import SideBar from "./SideBar";

function Main() {
  return (
    <div id="main-wrapper">
      <div class="container">
        <div class="row gtr-200">
          <div class="col-4 col-12-medium">
            {/* <!-- Sidebar --> */}
            <SideBar/>
          </div>
          <div class="col-8 col-12-medium imp-medium">
            {/* <!-- Content --> */}
            <Content/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
