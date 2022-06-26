import React from "react";
import Item from "./Item";
import Presentation from "./Presentation";

const ItemsList = ({ items, addToCartFunc }) => {
  return (
    <div>
      <Presentation />
      <main>
        {items.map((item, i) => (
          <Item key={item.id} item={item} addToCartFunc={addToCartFunc} />
        ))}
      </main>
    </div>
  );
};

export default ItemsList;
