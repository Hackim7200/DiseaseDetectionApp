import React from "react";
import Nav from "./Nav/Nav";
import Logo from "./Logo";

function Header() {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        {/* <!-- Logo --> */}
        <Logo/>
        {/* <!-- Nav --> */}
        {/* <Nav/>  have to create my own  nav component since the menu disapears after reducing screen size */}

        <Nav/>

        
      </header>
    </div>
  );
}

export default Header;
