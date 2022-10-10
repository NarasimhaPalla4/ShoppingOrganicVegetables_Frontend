import React, { useState, useEffect } from "react";
import Amazon from "./components/Amazon";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Button from './Button';
import { Outlet, Link } from "react-router-dom";

const Product = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].qty += d;

    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...arr]);
  };
  
const getCookie = (cname) => {

  let name = cname + "=";

  let decodedCookie = decodeURIComponent(document.cookie);

  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {

      let c = ca[i];

      while (c.charAt(0) == ' ') {

          c = c.substring(1);

      }

      if (c.indexOf(name) == 0) {

          return c.substring(name.length, c.length);

      }

  }

  return "";

}


const signoutHandler = () => {

  console.log("logout")

  console.log(window.location);

  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  window.location.href = '/'; 


}

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
       {getCookie("accessToken") &&

<div className='login-register'>

    {/* <a href='/login'><Button text='My Orders' /></a> */}

    {/* <a href='/Cart'><Button text='Cart' /></a> */}

    {/* <a href='/register'><Button text='Profile' /></a> */}

    <Link to="/Logout" onClick={signoutHandler} > <Button text='Logout' /> </Link>

</div>

}
    </React.Fragment>
  );
};

export default Product;