import React, { useEffect, useState } from "react";
//import list from "../data";
import Cards from "./Card";
import "../styles/Amazon.css";

const Amazon = ({ handleClick }) => {
    const [items,setItems]= useState([]);
    const [error,setError] = useState(null);
    
        useEffect(() => {fetch("http://localhost:8080/api/auth/productlist")
        .then(res => res.json())
        .then(
        (result) =>{
            console.log('called get items')
            console.log(result)
            setItems(result)
        },

        (error) => {
            setError(error);
        }
        )
        },[]
        )
  return (
    <section>
      {items.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;