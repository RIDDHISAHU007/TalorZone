import React from "react";
import Filter from "../components/Filter.jsx";
import RectangleBoxes from "../components/RectangleBoxes.jsx";

const BestSellersPage = () => {
  return (
    <div className="best-sellers-container">
      <h2 className="best-sellers-title">Best Sellers</h2>
      <div className="filter-section">
        <Filter />
      </div>
      <div className="rectangle-boxes-section">
        <RectangleBoxes />
      </div>
    </div>
  );
};

export default BestSellersPage;
