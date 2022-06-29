import React from "react";
import "./FullItem.css";
import AddToCartBtn from "../UI/AddToCartBtn";

const FullItem = ({ item, addToCartFunc }) => {
  return (
    <div className="full-item">
      <img src={"./img/" + item.img} alt="" />
      <div className="info">
        <h3 className="title">{item.title}</h3>
        <b className="price">{item.price} $</b>
      </div>
      <AddToCartBtn addToCartFunc={addToCartFunc} item={item} />
    </div>
  );
};

export default FullItem;
