import React from "react";
import "./Personal.css";

const Personal = () => {
  return (
    <div className="personal">
      <h1>Авторизация</h1>
      <form action="">
        <input type="text" placeholder="Логин"/>
        <input type="text" placeholder="Пароль"/>
        <button type="button" onClick={() => {return false}}>Войти</button>
      </form>
    </div>
  );
};

export default Personal;
