import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setisAuth]=useState(true);

  const login =()=>{
    setisAuth(!isAuth);
  }
  const logout=()=>{
    setisAuth(!isAuth);
  }

  return <AuthContext.Provider value={[isAuth,login,logout]}>{children}</AuthContext.Provider>;
};
