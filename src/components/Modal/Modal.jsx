import React from "react";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ element, changeVisibleModal, positionModal }) => {
  return (
    <div
      className="modal"
      style={{ top: `${positionModal}px` }}
      onClick={(e) => {
        if (e.target.className === "modal") {
          changeVisibleModal();
        }
      }}
    >
      <div className="modal-container">
        <div
          className="close-modal-btn"
          onClick={() => {
            changeVisibleModal();
          }}
        >
          {<AiFillCloseCircle />}
        </div>
        {element}
      </div>
    </div>
  );
};

export default Modal;
