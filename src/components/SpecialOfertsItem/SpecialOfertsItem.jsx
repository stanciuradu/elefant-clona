import React from "react";

function SpecialOfertsItem(props) {
  const { image, name, description, RRP, price, priceTop } = props;
  return (
    <div className="col-3">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p>RRP:{RRP}</p>
      <p className="price">{price}</p>
      <p className="price-top">{priceTop}</p>
    </div>
  );
}

export default SpecialOfertsItem;
