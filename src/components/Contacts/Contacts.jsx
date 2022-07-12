import React from "react";
import {AiFillPhone, AiFillMail, AiFillClockCircle} from 'react-icons/ai'
import { BsFillPinMapFill } from "react-icons/bs";
import './Contacts.css'

const Contacts = () => {
  return (
    <div className="wrapper">
      <h1 className="contacts-title">Контактная информация</h1>
      <div className="contacts">
        <address className="phone">
          <AiFillPhone className="contact-ico"/>
          +7 (999)-999 99 99
        </address>
        <address className="mail">
          <AiFillMail className="contact-ico"/>
          assembla@ya.ru
        </address>
        <address className="adress">
          <BsFillPinMapFill className="contact-ico"/>
          г. Москва, ул. Пушкина 127
        </address>
        <address className="time">
          <AiFillClockCircle className="contact-ico"/>
          Пн-Сб: с 9:00 до 18:00 
          <br /> 
          Вс: Выходной
        </address>
      </div>
      <img src="./img/map.jpg" alt="" className="map" />
    </div>
  );
};

export default Contacts;
