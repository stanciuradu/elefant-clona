import React from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.png";
import cont from "../../assets/images/cont.png";
import favorite from "../../assets/images/favorite.png";
import cart from "../../assets/images/cart.png";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="input-search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Căutati cuvantul cheie, codul de produs, tip produs"
          />
          <button type="button">
            <img src={search} alt="Search" />
          </button>
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
    </div>
  );
}

export default Header;
