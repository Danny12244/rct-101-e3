import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext, CartProvider } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const [count,setCount,data,] = useContext(CartContext);
  const product = { id: 1 };

  // console.log(data);
  // console.log(counttt);
 

  const [show,setShow]= useState(true)

  const decrement=()=>{
    
    if(count==0){
      setShow(!show)
  }
    setCount(count - 1)
}

  const handleClick=()=>{
    setShow(!show)
  }



  const removeCart=()=>{
    setShow(!show)
    setCount(1)
  }

  return (
    <>
      {data.map((el) => {
        return (
          <div data-cy={`product-${el.id}`} key={el.id}>
            <h3 data-cy="product-name">{el.name}</h3>
            <h6 data-cy="product-description">{el.description}</h6>
            {show?( <button data-cy="product-add-item-to-cart-button"onClick={handleClick}>Add Cart</button>):""}
           
            {show?( "" ):(<div>
              <button
                data-cy="product-increment-cart-item-count-button"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <span data-cy="product-count">
                {
                  // Count here from CartItems
                  count
                }
              </span>
              <button
                data-cy="product-decrement-cart-item-count-button"
                disabled={count == 0}
                onClick={decrement}
              >
                -
              </button>
              <button data-cy="product-remove-cart-item-button" onClick={removeCart}>Remove Cart</button>
            </div>)}
          
          </div>
        );
      })}
    </>
  );
};

export default Product;
