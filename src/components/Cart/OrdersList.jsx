import React from "react";
import OrderDict from "../../utils/OrderDict";
import OrderItem from "./OrderItem";

const OrderList = ({ orders, setOrders }) => {

  function removeOrders(id) {
    return setOrders(orders.filter((order) => order.id !== id));
  }

  function editCountOrders(item, mode) {
    delete item.count
    const copyOrders = [...orders];
    if (mode === "minus") {
      let idx = null;
      copyOrders.forEach((e, i) => {
        if (JSON.stringify(e) === JSON.stringify(item)) {
          idx = i;
        }
      })
      copyOrders.splice(idx, 1);
      console.log(idx)
    } else {
      copyOrders.push(item);
    }
    setOrders(copyOrders);
  }

  return (
    <div className="order-list">
      {OrderDict(orders).map((order, i) => (
        <div key={i}>
          <OrderItem
            item={order}
            setOrders={removeOrders}
            editCountOrders={editCountOrders}
          />
        </div>
      ))}
    </div>
  );
};

export default OrderList;
