import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, image, price } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>Price - {price}/-</p><br></br>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;