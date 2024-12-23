import React from "react";
import Filter from "../components/Filter.jsx";
import RectangleBoxes from "../components/RectangleBoxes.jsx"; // Ensure the correct path
import "./EthnicPage.css"; // Import additional styles for the EthnicPage

const EthnicPage = () => {
  return (
    <div className="ethnic-page-container">
      <h2 className="ethnic-title">Ethnic Wear</h2>
      <div className="filter-section">
        <Filter />
      </div>
      <div className="rectangle-boxes-section">
        <RectangleBoxes />
      </div>
    </div>
  );
};

export default EthnicPage;
