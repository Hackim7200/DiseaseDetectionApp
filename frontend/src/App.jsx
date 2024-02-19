import React, { useContext, useState } from "react";

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

import { LoginContext, LoginProvider } from "./context/Context.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import PublicRoutes from "./utils/PublicRoutes.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    // App is the theme

    <>
      {/* privare routes */}
      <Route element={<PrivateRoutes />}> 
        <Route path="/" element={<Home />} index={true} />
        <Route path="/about" element={<About />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>

      <Route element={<PublicRoutes />}>
        {/* not prottected routes */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      
    </>
  )
);

function App() {
  return (
    // this is the useContext hook <LoginProvider>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  );
}

export default App;
