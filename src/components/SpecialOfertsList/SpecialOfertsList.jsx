import React from "react";
import SpecialOfertsItem from "../SpecialOfertsItem/SpecialOfertsItem";

function SpecialOfertsList(props) {
  const { oferts } = props;
  return (
    <div className="container">
      <div className="row">
        {oferts.map((ofert, index) => {
          return (
            <SpecialOfertsItem
              image={ofert.image}
              name={ofert.name}
              description={ofert.description}
              RRP={ofert.RRP}
              price={ofert.price}
              priceTop={ofert.priceTop}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpecialOfertsList;
