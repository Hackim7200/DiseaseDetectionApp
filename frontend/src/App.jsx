import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {

  const getUser = async () => {
    try {
      console.log(await axios.get("http://127.0.0.1:8000/api/hello/"));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getUser()

  },[])

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
