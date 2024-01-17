import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <div id="header-wrapper">
      <header id="header" class="container">
        {/* <!-- Logo --> */}
        <Logo/>
        {/* <!-- Nav --> */}
        {/* <Nav/>  have to create my own  nav component since the menu disapears after reducing screen size */}

        
      </header>
    </div>
  );
}

export default Header;
