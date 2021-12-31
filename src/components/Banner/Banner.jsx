import React from "react";
import "../Banner/Banner.css";
import banner from "../../assets/images/banner.png";

function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
