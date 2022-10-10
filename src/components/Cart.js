import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const navigate=useNavigate();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };
  const pay=(e)=>{
    navigate('/Payment')
  }

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.qty}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}/-</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of the Cart :- </span>
        <span>Rs. {price}/-</span>
        <button onClick={(e)=>pay(e)}>pay now</button>
      </div>
    </article>
  );
};

export default Cart;