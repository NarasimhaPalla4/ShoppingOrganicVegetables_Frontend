// import { Outlet, Link } from "react-router-dom";
// import Button from './Button';
// function Main() {
//     const getCookie = (cname) => {

//         let name = cname + "=";

//         let decodedCookie = decodeURIComponent(document.cookie);

//         let ca = decodedCookie.split(';');

//         for (let i = 0; i < ca.length; i++) {

//             let c = ca[i];

//             while (c.charAt(0) == ' ') {

//                 c = c.substring(1);

//             }

//             if (c.indexOf(name) == 0) {

//                 return c.substring(name.length, c.length);

//             }

//         }

//         return "";

//     }

//     const signoutHandler = () => {

//         console.log("logout")

//         console.log(window.location);

//         document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//         window.location.href = '/'; 


//     }
    


//     return (
//        <div>

//         {getCookie("accessToken") &&

//                     <div className='login-register'>

//                         {/* <a href='/login'><Button text='My Orders' /></a> */}

//                         {/* <a href='/Cart'><Button text='Cart' /></a> */}

//                         {/* <a href='/register'><Button text='Profile' /></a> */}

//                         <Link to="/Logout" onClick={signoutHandler} > <Button text='Logout' /> </Link>

//                     </div>

// }
// </div>
        

//     );
// } 
// export default Main