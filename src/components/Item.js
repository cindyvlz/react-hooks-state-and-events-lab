import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdd, setAdd] = useState(false)
  function handleClick(){
    setAdd(!isAdd)
  }
  const itemClass = isAdd ? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdd ? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
