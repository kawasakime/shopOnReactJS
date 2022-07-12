import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="head">
          <Link to="/">
            <img src="./img/logo.svg" height="40" alt="" />
          </Link>
          <ul className="nav">
            <li className="cart-btn">
              <Link to="/cart">
                <img src="./img/cart.svg" height="25" alt="" />
              </Link>
              <div className="orders-count">4</div>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>Кабинет</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
