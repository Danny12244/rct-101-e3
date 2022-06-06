import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(1);
const [data, setData] = useState([]);
useEffect(() => {
  axios({ url: "http://localhost:8080/products", method: "GET" }).then(
    (res) => {
      // console.log(res.data);
      setData(res.data);
    }
  );
}, []);

  return <CartContext.Provider value={[count,setCount,data]} >{children}</CartContext.Provider>;
};
