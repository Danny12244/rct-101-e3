import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[isAuth,login]=useContext(AuthContext)
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("cityslicka")
  const submit= () => {
    login()
  }
  return (
    <div>
      <input data-cy="login-email" type='email'value={email} onChange={({target})=>setEmail(target.value)} placeholder="email"/><br/>
      <input data-cy="login-password" type='password'value={password} placeholder="password" onChange={({target})=>setPassword(target.value)}/><br/>
      <button data-cy="login-submit" onClick={submit}>Login</button>
    </div>
  );
};

export default Login;
