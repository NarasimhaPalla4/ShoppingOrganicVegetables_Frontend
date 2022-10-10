import React from 'react';
import './Login.css';
import log from './organic_reg.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
  
const SignIn = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

  const navigate=useNavigate();

 const loginData = {
        "username": username,
        "password": password
    }
  const errors = {
    pass: "invalid username/password"
  };


  const userLogin = (e) => {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    if(!username || !password){
        alert("You must fill all the fields");
    }
    else{
    e.preventDefault();
    authenticateUser(loginData)
    }
}
const setCookie= (cname, cvalue, exdays) => {

  const d = new Date();

  d.setTime(d.getTime() + (exdays*24*60*60*1000));

  let expires = "expires="+ d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

const authenticateUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/api/auth/signin", data).then(
        (response) => {
            
            console.log(response);
            if (response.status==200) {
                setCookie("accessToken",response.data.accessToken,1);
                console.log("navigating");
                setIsSubmitted(true);
                alert("Login successfull");
                // setCookie("accessToken",response.data.accessToken,1);
                navigate('/Product')
                
            }
        }, (error) => {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
    );
}

const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}

// const setCookie= (cname, cvalue, exdays) => {

//   const d = new Date();

//   d.setTime(d.getTime() + (exdays*24*60*60*1000));

//   let expires = "expires="+ d.toUTCString();

//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

// }


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div>
    <center><h2>Login</h2></center><br></br>
    <div className='log'>
      <img src={log} alt=""></img>
    </div>
    <div className="login">
        <div>
        <center><label>Username</label><br></br></center>
          <input type="text" name="uname" id="user" value={username} onChange={e => onInputChangeUsername(e)} required />
          {renderErrorMessage("uname")}
        </div><br></br>
        <div>
        <center><label>Password</label><br></br></center>
          <input type="password" name="pass" id="pass" value={password} onChange={e => onInputChangePassword(e)} required />
          {renderErrorMessage("pass")}
        </div><br></br>
          <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
    </div>
    </div>
  );

 
    return(
        <div>
        {isSubmitted ? navigate("/") : renderForm}
        </div>
    );
}

export default SignIn;