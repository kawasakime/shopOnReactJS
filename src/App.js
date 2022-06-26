import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import itemsDB from "./itemsDB";
import ItemsList from "./components/ItemsList";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { FiCheck } from "react-icons/fi";
import ReactDOMServer from "react-dom/server";

function App() {
  const [items, setItems] = useState(itemsDB);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.querySelector(".orders-count").innerHTML = orders.length;
  });

  function addToOrders(item, e = null) {
    setOrders([...orders, item]);
    const btn = e.target;
    btn.innerHTML = ReactDOMServer.renderToString(<FiCheck />);
    btn.style.fontSize = "14px";
    btn.style.background = "#356921";
    btn.style.color = "#fff";
    btn.style.pointerEvents = "none";
    setTimeout(() => {
      btn.innerHTML = "+";
      btn.style.fontSize = "24px";
      btn.style.background = "#dff7a7";
      btn.style.color = "#000";
      btn.style.pointerEvents = "auto";
    }, 1500);
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<ItemsList items={items} addToCartFunc={addToOrders} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart orders={orders} setOrders={setOrders} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
