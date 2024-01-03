import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import brand from "../Assets/brand.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img id="bag" src={logo} alt="logo" />
        <p>
          <img src={brand} width="130px" alt="logo" />
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={menu === "shop" ? { color: "#FF4141" } : {}}>
            Shop
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("ladies");
          }}
        >
          <Link to="/women" style={menu === "ladies" ? { color: "#FF4141" } : {}}>
            Ladies
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("gentlemen");
          }}
        >
          <Link to="/men" style={menu === "gentlemen" ? { color: "#FF4141" } : {}}>
            Gentlemen
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={menu === "kids" ? { color: "#FF4141" } : {}}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/loginSignup">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
