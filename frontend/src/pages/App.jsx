// which ever page has the outlet comp becomes the layout design
// import Header from './components/Header'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuPopup from "../components/MenuPopup/MenuPopup.jsx"
import PopupMenu2 from "../components/PopupMenu2/PopupMenu2.jsx"
// import Hero from './components/Hero'

function App() {
  return (
    // where output is used you can use it to set the general design of the website e.g., header,footer
    <>
    <div className="is-preload homepage">
      <div id="page-wrapper">
        
        <Header/>
        
        
        {/* This is where everything will apear */}
        <Outlet />  

        <Footer/>
      </div>

      {/* <!-- Scripts --> */}

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.dropotron.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
    {/* <MenuPopup/> */}

    <PopupMenu2/>




    </>

    
  );
}

export default App;
