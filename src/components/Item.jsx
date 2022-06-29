import React from "react";
import AddToCartBtn from "./UI/AddToCartBtn";

const Item = ({ item, addToCartFunc, changeVisibleModal, setActiveItem }) => {
  return (
    <div className="item">
      <img
        src={`./img/${item.img}`}
        alt=""
        onClick={() => {
          changeVisibleModal();
          setActiveItem(item);
        }}
      />
      <h2 className="title">{item.title}</h2>
      <p className="desc">{item.desc}</p>
      <b className="price">{item.price} $</b>
      <AddToCartBtn addToCartFunc={addToCartFunc} item={item} />
    </div>
  );
};

export default Item;
