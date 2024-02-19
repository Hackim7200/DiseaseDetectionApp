import React, { useEffect } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";



function Home() {
  // const navigate = useNavigate();

  // const RedirectAuth = () => {
  //   const isLogged = localStorage.getItem("isLogged");
  //   console.log(isLogged);
  //   if (isLogged == "True") {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  
  // useEffect(()=>{
    
  //   RedirectAuth()

  // },[])

  return (
    <>






      {/* <!-- Banner --> */}
      <Banner />

      {/* <!-- Features --> */}
      <Feature />

      {/* <!-- Main --> */}
      {/* <Main /> */}

     
    </>
  );
}

export default Home;
