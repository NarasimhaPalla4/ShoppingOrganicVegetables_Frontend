import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Product from './Product';
import Payment from './Payment';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Product" element={<Product />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;