import React, { useEffect, useState } from "react";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Link } from "react-router-dom";
// const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const login = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", pwd);

      const response = await Axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData,
        {
          withCredentials: true, // This is important for handling cookies
        }
      );

      console.log("Login Successful:", response.data);
      // Handle further logic here (like redirecting the user or setting state)
    } catch (error) {
      console.error("Login error:", error.response);
      // Handle errors here (like showing an error message)
    }
  };

  const checkCookie = async () => {
    try {
      const response = await Axios.get("http://127.0.0.1:8000/api/see/", {
        withCredentials: true,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    login();
  };

  return (
    <>
      <ToastContainer
        closeButton={false} // the close button clashes with the existing css
      />

      <div className="form-wrapper">
        <div className="wrapper">
          <span className="profileImg">
            <FontAwesomeIcon icon={faUser} size="7x" />
          </span>

          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="input-box">
              <input
                name="password"
                type="password"
                placeholder="Create password"
                required
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
            </div>

            <div className="submitBtn">
              <button type="Submit" className="button icon solid fa-seedling">
                Login
              </button>
            </div>

            <div className="text">
              <h3>
                Already have an account?{" "}
                <Link to="/register">Register now</Link>
              </h3>
            </div>
          </form>
          <button onClick={checkCookie}>check cookie</button>
        </div>
      </div>
    </>
  );
}

export default Login;
