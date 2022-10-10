import React from "react";
import "../styles/Navbar.css";

const Navbar=({ setShow, size })=>{
    return(
        <nav>
        <div className="nav_box">
        <div className="my_shop" onClick={() => setShow(true)}>
          Welcome to the shopping page
        </div>
        <div className="cart" onClick={() => setShow(false)}>
          <button>Go to cart: {size}</button>
          {/* <span>
             <i className="fas fa-cart-plus"></i> 
          </span> */}
        </div>
      </div>
        </nav>
    )
}
export default Navbar;