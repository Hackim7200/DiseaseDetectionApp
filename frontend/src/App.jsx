import React, { useContext, useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Detect from "./pages/Detect/Detect.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Layout from "./pages/Layout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes.jsx";

import Axios from "axios";
import { LoginContext } from "./context/Context.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* privare routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} index={true} />
        <Route path="/about" element={<About />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>

      <Route element={<Layout />}>
        {/* public routes */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </>
  )
);

function App() {
  const { setLogged } = useContext(LoginContext);

  const authenticate = async () => {
    try {
      const response = await Axios.get(
        "http://127.0.0.1:8000/api/authenticate/",
        {
          withCredentials: true, // This is important for handling cookies
        }
      );

      setLogged(true);
      console.log(" logged in ");

    } catch (error) {
      setLogged(false);
      console.log("not logged in ");
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
