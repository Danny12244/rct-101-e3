import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[isAuth,login]=useContext(AuthContext)
  const submit= () => {
    login()
  }
  return (
    <div>
      <input data-cy="login-email" placeholder="email"/><br/>
      <input data-cy="login-password" placeholder="password"/><br/>
      <button data-cy="login-submit" onClick={submit}>Login</button>
    </div>
  );
};

export default Login;
