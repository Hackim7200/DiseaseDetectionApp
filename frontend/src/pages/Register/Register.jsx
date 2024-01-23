import "./Register.scss"
import React, { useEffect, useState } from 'react'


// regex from ->  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

// Minimum eight characters, at least one letter and one number:
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/


function Register() {

    const [user,setUser] = useState("")
    const [validName,setValidName] = useState(false)
    const [userFocus,setUserFocus] = useState(false)

    const [pwd,setPwd] = useState("")
    const [validPwd,setValidPwd] = useState(false)
    const [userPwdFocus,setPwdFocus] = useState(false)

    const [pwdMatch,setPwdMatch] = useState("")
    const [validPwdMatch,setValidPwdMatch] = useState(false)
    const [userPwdMatchFocus,setPwdMatchFocus] = useState(false)

    const [errMsg,setErrMsg] = useState("")
    const [successMsg,setSuccessMsg] = useState(false)

    useEffect(()=>{
        setValidName(USER_REGEX.test(user))  //.test return true if matche else false

    },[user])

    useEffect(()=>{
        setValidPwd(PWD_REGEX.test(pwd))  //.test return true if matche else false

        if(pwd == pwdMatch)
        {
            setValidPwdMatch(true) 
        } else setValidPwdMatch(false)
    },[pwd,pwdMatch])

    useEffect(()=>{
        setErrMsg("") // reset the error msg anytime changes made

    },[pwd,user,pwdMatch])







  return (
   
    <div>
        
       <form action="">

        <label htmlFor="username">Username</label>
        <input 
        value={user}
        type="text"
        placeholder='JohnDoe2008'
        onChange={(e)=>setUser(e.target.value)}
        />
       
       <br />
       <label htmlFor="password">Password</label>
        <input value={pwd} 
        type="password" 
        onChange={(e)=>setPwd(e.target.value)}/>

        <br />
        <label htmlFor="password">Password re-enter</label>
        <input value={pwdMatch} type="password" onChange={(e)=>setPwdMatch(e.target.value)}/>

       </form>




    </div>
  )
}

export default Register