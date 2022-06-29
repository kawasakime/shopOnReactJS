import { FiCheck } from "react-icons/fi";
import ReactDOMServer from "react-dom/server";

export const changeStyle = (e) => {
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
};

export const scsflChange = (e, message, close) => {
  e.target.classList.toggle("done");
  e.target.innerHTML = "Отправлено ";
  e.target.style.pointerEvents = "none";
  message.style.color = "#42a242";
  message.innerHTML = "Мы свяжемся с вами в ближайшее время";
  message.style.opacity = "1";
  setTimeout(() => {
    e.target.style.pointerEvents = "auto";
    e.target.classList.toggle("done");
    e.target.innerHTML = "Отправить";
    message.style.opacity = "0";
    close()
  }, 3000);
};

export const errorChange = (e, message) => {
  message.innerHTML = "Введите все данные";
  e.target.style.pointerEvents = "none";
  message.style.opacity = "1";
  message.style.color = "#a83030";
  setTimeout(() => {
    e.target.style.pointerEvents = "auto";
    message.style.opacity = "0";
  }, 2000);
};
