import React from "react";

function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li class="current">
          <a href="index.html">Welcome</a>
        </li>
        <li>
          <a href="left-sidebar.html">History</a>
        </li>
        <li>
          <a href="right-sidebar.html">Support us</a>
        </li>
        <li>
          <a href="no-sidebar.html">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
