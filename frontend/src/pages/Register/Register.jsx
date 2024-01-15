import React, { useState } from 'react'

import {faCheck,faTimes,faInfoCircle} from "@fontawesome/free-solid-svg-icons"

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
    const [successMsg,setSuccessMsg] = useState(False)





  return (
    <div>Register</div>
  )
}

export default Register