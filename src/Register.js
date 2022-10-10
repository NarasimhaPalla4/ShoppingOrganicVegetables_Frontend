import './Register.css';
import React, { useState } from "react";
import validator from 'validator';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import org from './organicRegister.jpg';

const Register=() => {
  const[passError, setpassError] =useState('');
  const [register, setRegister] = useState([
    {
      username: "",
      password: "",
    }
  ]);

  const navigate=useNavigate();

  function changeDetails(e) {
    let value = e.target.value;

    setRegister({ ...register, [e.target.name]: value});
  }

  const validatePassword = (e) => {
    var password = e.target.value
    if (validator.isStrongPassword(password)) {
      setpassError(" Valid Password")
      setRegister({...register,[e.target.name]:password});
    } 
    else {
      setpassError("Password must contains 1 uppercase, 1 lowercase, 1 specialchar and 1 number");
    }
  }

  const insertAction = async (e) => {

    let username = document.getElementById("user").value;
    let password1 = document.getElementById("pass").value;
    let password2 = document.getElementById("confirmpass").value;
    if(!username || !password1 ||!password2){
      alert("You must fill all the fields")
    }
    else{
        if(password1==password2){
        await axios.post(
        "http://localhost:8080/api/auth/signup",
        register
        ).then(
        (response) => {
          
          console.log(response);
          if (response.status==200) {
              console.log("navigating");
              //setIsSubmitted(true);
              alert("Registration successfull")
              navigate('/Login')
          }
          else{
            alert("You are already registered, go to login page")
          }
        })}
      else{
          alert("confirm password must be same as password")
      }
    }
  }
  return (
    <div>
        <center><h1>Register</h1></center><br></br>
        <div className='reg'>
          <img src={org} alt=""></img>
        </div>
        <div className="register">
        <div>
          <center><label>Username</label><br></br></center>
          <input type="username" name="username" id="user" value={register.username}
            onChange={(e) => changeDetails(e)} /></div><br></br>
          <div>
          <center><label>Password</label><br></br></center>
          <input type="password" name="password" id="pass" value={register.password}
           onChange={(e) => validatePassword(e)} /></div><span style={{
            fontSize: '13px',
            fontWeight: 'bold',
            color: 'black',
          }}>{passError}</span><br></br>
           <div>
          <label>Confirm Password</label><br></br>
          <input
            type="password"
            name="loginPassword"
            id="confirmpass"
            required />
            </div><br></br>
          <input type="submit" value="Register" onClick={(e) => insertAction(e)} />
          </div>
        </div>
  );
}
export default Register;