import React from "react";
import Order from "./Order";
import OrderList from "./OrdersList";

const Cart = ({ orders, setOrders }) => {
  function checkOrders() {
    if (orders.length === 0) {
      return <div className="cart empty-cart">Корзина пуста</div>;
    } else {
      return (
        <div className="cart">
          <OrderList orders={orders} setOrders={setOrders} />
          <Order orders={orders} />
        </div>
      );
    }
  }
  return checkOrders();
};

export default Cart;
