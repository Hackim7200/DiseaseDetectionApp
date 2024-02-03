import "./Register.scss";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

// regex from ->  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [pwdMatch, setPwdMatch] = useState("");
  const [validPwdMatch, setValidPwdMatch] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    setValidName(USER_REGEX.test(user)); //.test return true if matche else false
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email)); //.test return true if matche else false
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd)); //.test return true if matche else false

    if (pwd == pwdMatch) {
      setValidPwdMatch(true);
    } else setValidPwdMatch(false);
  }, [pwd, pwdMatch]);

  useEffect(() => {
    setErrMsg(""); // reset the error msg anytime changes made
  }, [pwd, user, pwdMatch]);


  
  const register = async ()=>{
    try{
      const formData = new FormData()
      formData.append('name',user)
      formData.append('email',email)
      formData.append('password',pwd)

      const res = await Axios.post("http://127.0.0.1:8000/api/register/",formData)
      console.log(res.response)

      return navigate('/login')



    }catch(err){
      console.log(err.response.data.email[0])
      const status = err.response.status
      if(status==400){
        toast(err.response.data.email[0])

      }

  }}






  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    if (!validName) {
      toast("Please make sure all the field are correctly provided!!");
    }


    if (validEmail & validName & validPwdMatch & validPwd) {
      register()
      

    }
    

  };

  const toastLook = {
    backgroundColor: "crimson",
    color: "white",
  }

  return (
    <>

      <ToastContainer
        closeButton={false} // the close button clashes with the existing css
        toastStyle={toastLook}
      />

      <div>
        <div className="form-wrapper">
          <div className="wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                {!validName ? (
                  <span>
                    <FontAwesomeIcon icon={faXmark} color="red" />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="green" />
                  </span>
                )}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!validEmail ? (
                  <span>
                    <FontAwesomeIcon icon={faXmark} color="red" />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="green" />
                  </span>
                )}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  required
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                {!validPwd ? (
                  <span>
                    <FontAwesomeIcon icon={faXmark} color="red" />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="green" />
                  </span>
                )}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm password"
                  required
                  onChange={(e) => setPwdMatch(e.target.value)}
                  value={pwdMatch}
                />
                {!validPwdMatch ? (
                  <span>
                    <FontAwesomeIcon icon={faXmark} color="red" />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faCheck} color="green" />
                  </span>
                )}
              </div>
              <div className="policy">
                <input type="checkbox" />I accept all terms & condition
              </div>

              <div className="submitBtn">
                <button
                  type="submit"
                  value="Submit"
                  className="button icon solid fa-seedling"
                >
                  Register Now
                </button>
              </div>

              <div className="text">
                <h3>
                  Already have an account? <Link to="/login">Login now</Link>
                </h3>
              </div>


           
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
