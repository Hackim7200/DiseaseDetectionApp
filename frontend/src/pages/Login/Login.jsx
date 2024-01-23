import React from "react";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
  const notify = () => {
    console.log("clicked");
    toast("Wow so easy!");
  };

  return (
    <>
      <ToastContainer 
      closeButton={false} // the close button clashes with the existing css
      />

      <div className="form-wrapper">
        <div className="wrapper">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Create password" required />
            </div>

            <div className="submitBtn">
              <button
                type="Submit"
                className="button icon solid fa-seedling"
                onClick={notify}
              >
                Login
              </button>
            </div>

            <div className="text">
              <h3>
                Already have an account? <a href="#">Register now</a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
