import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers for You</h1>
        <p>ONLY ON BEST-SELLER PRODUCTS</p>
        <Link to="/women">
        <button>Check Now!</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
}

export default Offers;
