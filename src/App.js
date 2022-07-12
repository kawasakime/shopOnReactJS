import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import itemsDB from "./itemsDB";
import ItemsList from "./components/ItemsList";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { loadData, saveData } from "./service/LocalData";
import { changeStyle } from "./service/changeStyle";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Personal from "./components/Personal/Personal";

function App() {
  const [orders, setOrders] = useState(loadData());
  const [visibleModal, setVisibleModal] = useState(false);
  const [positionModal, setPositionModal] = useState(0);

  function editOrdersCount() {
    document.querySelector(".orders-count").innerHTML = orders.length;
  }

  function changeVisibleModal() {
    setVisibleModal(!visibleModal);
    setPositionModal(window.pageYOffset);
    const body = document.querySelector("body");
    !visibleModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible");
  }

  useEffect(() => {
    editOrdersCount();
    saveData(orders);
  });

  function addToOrders(item, element = null) {
    setOrders([...orders, item]);
    changeStyle(element);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <ItemsList
              items={itemsDB}
              addToCartFunc={addToOrders}
              visibleModal={visibleModal}
              changeVisibleModal={changeVisibleModal}
              positionModal={positionModal}
              setPositionModal={setPositionModal}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              orders={orders}
              setOrders={setOrders}
              visibleModal={visibleModal}
              changeVisibleModal={changeVisibleModal}
              positionModal={positionModal}
            />
          }
        ></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path='/login' element={<Personal/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
