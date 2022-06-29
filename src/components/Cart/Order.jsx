import React from "react";
import OrderDict from "../../utils/OrderDict";

const Order = ({ orders, changeVisibleModal }) => {
  function totalPrice() {
    let total = 0;
    orders.map((item) => {
      total += item.price;
      return null;
    });

    return "= " + total.toFixed(2) + " $";
  }

  return (
    <div className="order">
      <h3>Информация о заказе</h3>
      <ul>
        {OrderDict(orders).map((item, i) => {
          return (
            <li key={i}>
              <div>
                {item.title} <b>x{item.count}</b>
              </div>
              <div className="price">
                {(item.price * item.count).toFixed(2)} $
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">{totalPrice()}</div>
      <button className="checkoutBtn" onClick={() => {changeVisibleModal()}}>Оформить заказ</button>
    </div>
  );
};

export default Order;
