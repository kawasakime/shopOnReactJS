import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const OrderItem = ({ item, setOrders, editCountOrders }) => {
  return (
    <div className="order-item">
      <img src={`./img/${item.img}`} alt="" />
      <h2 className="title">{item.title}</h2>
      <b className="price">{(item.price * item.count).toFixed(2)} $</b>
      <div className="minus-plus-btns">
        <div
          className="minus"
          onClick={() => {
            editCountOrders(item, "minus");
          }}
        >
          <AiOutlineMinusCircle />
        </div>
        <div
          className="plus"
          onClick={() => {
            editCountOrders(item, "plus");
          }}
        >
          <AiOutlinePlusCircle />
        </div>
      </div>
      <div className="count">{item.count}</div>
      <div
        className="remove-order-item"
        onClick={() => {
          setOrders(item.id);
        }}
      >
        <BsTrash />
      </div>
    </div>
  );
};

export default OrderItem;
