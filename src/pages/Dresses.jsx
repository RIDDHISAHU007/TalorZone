import React from "react";
import Filter from "../components/Filter.jsx";
import RectangleBoxes from "../components/RectangleBoxes.jsx";

const DressesPage = () => {
  return (
    <div className="dresses-container">
      <h2 className="dresses-title">Dresses</h2>
      <div className="filter-section">
        <Filter />
      </div>
      <div className="rectangle-boxes-section">
        <RectangleBoxes />
      </div>
    </div>
  );
};

export default DressesPage;
