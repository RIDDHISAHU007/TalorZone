import React from "react";
import Filter from "../components/Filter.jsx";
import RectangleBoxes from "../components/RectangleBoxes.jsx";

const Jump = () => {
  return (
    <div className="jump-container">
      <h2 className="jump-title">Jump</h2>
      <div className="filter-section">
        <Filter />
      </div>
      <div className="rectangle-boxes-section">
        <RectangleBoxes />
      </div>
    </div>
  );
};

export default Jump;
