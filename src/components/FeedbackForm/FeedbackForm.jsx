import React from "react";
import { useRef } from "react";
import { errorChange, scsflChange } from "../../service/changeStyle";
import "./FeedbackForm.css";

const FeedbackForm = ({ changeVisibleModal }) => {
  const firstName = useRef(null),
    phone = useRef(null),
    checkbox = useRef(null);

  function successfully(e) {
    const message = document.querySelector(".message");
    if (
      firstName.current.value.length > 0 &&
      phone.current.value.length === 12 &&
      checkbox.current.checked
    ) {
      scsflChange(e, message, changeVisibleModal);
    } else {
      errorChange(e, message);
    }
  }

  return (
    <form action="" className="feedback-form">
      <h3>Заполните данные</h3>
      <label htmlFor="first-name">
        Имя <br></br>
        <input type="text" name="first-name" ref={firstName} required />
      </label>
      <label htmlFor="phone">
        Номер телефона<br></br>
        <input
          type="text"
          name="phone"
          maxLength={12}
          defaultValue="+7"
          ref={phone}
          required
        />
      </label>
      <label htmlFor="agree" className="agree">
        <input type="checkbox" name="agree" ref={checkbox} required />
        Соглашаюсь на обработку данных
      </label>
      <button
        className="send-data"
        type="button"
        onClick={(e) => {
          successfully(e);
        }}
      >
        Отправить
      </button>
      <p className="message">Мы свяжемся с вами в ближайшее время</p>
    </form>
  );
};

export default FeedbackForm;
