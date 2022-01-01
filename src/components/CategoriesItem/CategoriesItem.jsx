import React from "react";
import "./CategoriesItem.css";

function CategoriesItem(props) {
  const { name, image } = props;
  return (
    <div className="col-3">
      <img src={image} alt="" />
      <h2>
        <em>{name}</em>
      </h2>
      <p className="border"></p>
    </div>
  );
}

export default CategoriesItem;
