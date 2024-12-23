import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-bar">
      <div className="filter-item">
        <label htmlFor="size">Size</label>
        <select id="size">
          <option value="">Select Size</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">XL</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="color">Color</label>
        <select id="color">
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="material">Material</label>
        <select id="material">
          <option value="">Select Material</option>
          <option value="cotton">Cotton</option>
          <option value="silk">Silk</option>
          <option value="wool">Wool</option>
          <option value="linen">Linen</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="pattern">Pattern</label>
        <select id="pattern">
          <option value="">Select Pattern</option>
          <option value="solid">Solid</option>
          <option value="striped">Striped</option>
          <option value="floral">Floral</option>
          <option value="checked">Checked</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="price">Price</label>
        <select id="price">
          <option value="">Select Price Range</option>
          <option value="0-1000">0 - 1000 Rs</option>
          <option value="1001-2000">1001 - 2000 Rs</option>
          <option value="2001-5000">2001 - 5000 Rs</option>
          <option value="5001+">5001+ Rs</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="discount">Discount</label>
        <select id="discount">
          <option value="">Select Discount</option>
          <option value="10">10% and above</option>
          <option value="20">20% and above</option>
          <option value="30">30% and above</option>
          <option value="50">50% and above</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
