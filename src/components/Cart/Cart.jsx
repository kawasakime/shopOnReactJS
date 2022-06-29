import React from "react";
import Order from "./Order";
import OrderList from "./OrdersList";
import Modal from "../Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import './Cart.css'

const Cart = ({ orders, setOrders, visibleModal, changeVisibleModal, positionModal}) => {
  function checkOrders() {
    if (orders.length === 0) {
      return <div className="cart empty-cart">Корзина пуста</div>;
    } else {
      return (
        <div>
          <div className="wrapper">
            <div className="cart">
              <OrderList orders={orders} setOrders={setOrders} />
              <Order orders={orders} changeVisibleModal={changeVisibleModal} />
            </div>
          </div>
          {visibleModal && (
            <Modal
              element={<FeedbackForm changeVisibleModal={changeVisibleModal} />}
              changeVisibleModal={changeVisibleModal}
              positionModal={positionModal}
            />
          )}
        </div>
      );
    }
  }
  return checkOrders();
};

export default Cart;
