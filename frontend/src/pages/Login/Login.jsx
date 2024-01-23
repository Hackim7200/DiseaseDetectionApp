import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="outer">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div className="policy">
            <input type="checkbox" />I accept all terms & condition
          </div>

          <div className="submitBtn">
            <a type="Submit" className="button icon solid fa-seedling">
              Register Now
            </a>
          </div>

          <div className="text">
            <h3>
              Already have an account? <a href="#">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
