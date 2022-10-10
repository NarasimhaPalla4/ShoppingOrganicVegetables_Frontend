// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import { useCart } from 'react-use-cart';
import React from "react";
import { useNavigate } from "react-router-dom";
import './Payment.css';

const Payment = () => {
    const navigate=useNavigate();
    
    const PlaceOrder=()=>{

        alert("order placed succesfully");
        navigate('/Product')
//   history.push(totalPath);

    }


    return(
        <div className='payment'>
            <center><h1>Payment details</h1></center>
            <center><h3>Pay with Debit/Credit Card</h3></center>
            <center><h4>Enter card details-</h4></center>
            <div className='register-form-element' >
            <center><input placeholder="Card Name" id="name" required type='text'></input></center><br></br>
            <center><input  placeholder="Card Number" id="no" required type='number'></input></center><br></br>
        
            <center><input  placeholder="CVV" id="pass" required type='password'></input></center><br></br>
            <center><button onClick={e => PlaceOrder(e)}>confirm payment</button></center>
            </div>    
        </div>
    )
}

export default Payment;