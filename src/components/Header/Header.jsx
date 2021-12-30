import React from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.png";
import cont from "../../assets/images/cont.png";
import favorite from "../../assets/images/favorite.png";
import cart from "../../assets/images/cart.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="input-search">
        <input type="search" name="" id=""  />
        <button type="button">Search</button>
      </div>
      <div className="buttons-header">
        <button type="button" className="conectare">
          CONECTARE
        </button>
        <div className="buttons-products">
          <button>
            <img src={cont} alt="User" />
            <label htmlFor="">Cont</label>
          </button>
          <button>
            <img src={favorite} alt="Favorite" className="Favorite" />
            <label htmlFor="">Favorite</label>
          </button>
          <button>
            <img src={cart} alt="Cart" />
            <label htmlFor="">Cos</label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
