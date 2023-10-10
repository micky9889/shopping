import React, { useState } from "react";
import { useCart } from "../context/ContextApi";

const Cart = () => {
  const { cart, removeFromCart, handleAdd, handleMinus } = useCart();
  const sum = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
  }, 0);

  return (
    <div>
      {cart.length>0 ? (cart.map((item) => (
        <ul
          key={item.id}
          className=" flex border border-gray-300 mt-2 p-3 shadow-md"
        >
          <li className="flex flex-row space-x-4">
            <img src={item.url} alt="" className="w-16 h-16" />
            <p>{item.title}</p>
            <p>price: {item.price}</p>
            <button
              className="border w-10 h-8"
              onClick={() => {
                handleMinus(item);
              }}
            >
              -
            </button>
            <p className="flex border w-10 h-8 justify-center items-center">
              {item.qty}
            </p>
            <button className="border w-10 h-8" onClick={() => handleAdd(item)}>
              +
            </button>
            <p>total:{item.price * item.qty}</p>
            <button
              className="border w-14 h-8 bg-red-500 text-white"
              onClick={() => removeFromCart(item)}
            >
              delete
            </button>
          </li>
        </ul>
      )))
      :( <div className="bg-white p-4 rounded-lg shadow-md mt-3 w-40 ml-auto mr-auto">
      <p className="text-center text-gray-600">No data...</p>
    </div>)
      }
     
      <p className="text-right mt-4">total:  {sum} </p>
    </div>
  );
};

export default Cart;
