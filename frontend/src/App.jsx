import React, { useContext, useState } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Detect from "./pages/Detect/Detect.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Theme from "./pages/Theme.jsx"

import { LoginContext,LoginProvider } from "./context/Context.jsx";



const router = createBrowserRouter(
  
  createRoutesFromElements(

    // App is the theme
    <Route path="/" element={<Theme />}>
      <Route index={true} path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/login" element={ <Login/>} />

      <Route path="/register" element={<Register />} />

      <Route path="/about" element={<About />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);






function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>

  )
}

export default App