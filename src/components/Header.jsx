import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="head">
        <Link to="/">
          <img src="./img/logo.svg" height="40" alt="" />
        </Link>
        <ul className="nav">
          <li className="cartBtn">
            <Link to="/cart">
              <img src="./img/cart.svg" height="25" alt="" />
            </Link>
            <div className="orders-count">4</div>
          </li>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
