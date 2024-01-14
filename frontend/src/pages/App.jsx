import { useEffect, useState } from "react";

import "./App.css"
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
      <div>Hello</div>
    </>
  );
}

export default App;
