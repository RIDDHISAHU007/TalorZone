import React from "react";
import Slider from "../components/Slider.jsx";
import RectangleBoxes from "../components/RectangleBoxes.jsx";
import Filter from "../components/Filter.jsx";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <Slider />
      <Filter />
      <RectangleBoxes />
    </div>
  );
}

export default Home;
