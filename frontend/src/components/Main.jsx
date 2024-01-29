import React from "react";

import Content from "./Content";
import SideBar from "./SideBar";

function Main() {
  return (
    <div id="main-wrapper">
      <div className="container">
        <div className="row gtr-200">
          <div className="col-4 col-12-medium">
            {/* <!-- Sidebar --> */}
            <SideBar/>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            {/* <!-- Content --> */}
            <Content/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
