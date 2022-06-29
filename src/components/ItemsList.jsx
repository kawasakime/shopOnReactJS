import React, { useState } from "react";
import Categories from "./Categories/Categories";
import FullItem from "./FullItem/FullItem";
import Item from "./Item";
import Modal from "./Modal/Modal";
import Presentation from "./Presentation/Presentation";

const ItemsList = ({
  items,
  addToCartFunc,
  visibleModal,
  changeVisibleModal,
  positionModal,
}) => {
  const [activeItem, setActiveItem] = useState({});
  const [category, setCategory] = useState("chairs");

  function sortItems(items, category) {
    if (category !== "all")
      return items.filter((item) => item.category === category);
    else return items;
  }

  return (
    <div>
      <div className="wrapper">
        <Presentation />
        <Categories category={category} setCategory={setCategory}/>
        <main
          style={{
            justifyContent: `${
              sortItems(items, category).length % 3 === 0 ? "space-between" : "flex-start"
            }`,
          }}
        >
          {sortItems(items, category).map((item, i) => (
            <Item
              key={item.id}
              item={item}
              addToCartFunc={addToCartFunc}
              setActiveItem={setActiveItem}
              changeVisibleModal={changeVisibleModal}
            />
          ))}
        </main>
      </div>
      {visibleModal && (
        <Modal
          positionModal={positionModal}
          changeVisibleModal={changeVisibleModal}
          element={
            <FullItem
              item={activeItem}
              changeVisibleModal={changeVisibleModal}
              addToCartFunc={addToCartFunc}
            />
          }
        />
      )}
    </div>
  );
};

export default ItemsList;
