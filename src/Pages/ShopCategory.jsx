import React from "react";
//This is Ladies, Gentlemen, kids page
import "./CSS/ShopCategory.css";
import { useContext } from "react"; //Using useContext Hook for fetching data
import { ShopContext } from "../Context/ShopContext";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} />
    </div>
  );
}

export default ShopCategory;
