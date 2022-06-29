import React from "react";
import { useState } from "react";
import "./Categories.css";

const Categories = ({category, setCategory }) => {
  const [categories, setCategories] = useState([
    { key: "all", text: "Все" },
    { key: "chairs", text: "Стулья" },
    { key: "sofas", text: "Диваны" },
    { key: "kitchens", text: "Кухонные гарнитуры" },
  ]);

  function clearActive() {
    [...document.querySelectorAll('.category-btn')].forEach(e => {
      e.classList.remove('active-category')
    })
  }

  return (
    <div className="categories">
      {categories.map((e) => (
        <div
          className={`category-btn ${e.key === category ? "active-category" : ""}`}
          key={e.key}
          onClick={(event) => {
            setCategory(e.key);
            clearActive();
            event.target.classList.toggle('active-category')
          }}
        >
          {e.text}
        </div>
      ))}
    </div>
  );
};

export default Categories;
