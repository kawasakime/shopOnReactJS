import React from "react";
import Order from "./Order";
import OrderList from "./OrdersList";

const Cart = ({ orders, setOrders }) => {
  return (
    <div className="cart">
      <OrderList orders={orders} setOrders={setOrders}/>
      <Order orders={orders}/>
    </div>
  );
};

export default Cart;
