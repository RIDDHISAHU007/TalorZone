import React from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon
import "./RectangleBoxes.css";

function RectangleBoxes() {
  const boxes = [
    {
      img: "https://via.placeholder.com/300x150?text=Box+1",
      name: "Sharara Set",
      price: "4,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+2",
      name: "Kurti",
      price: "2,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+3",
      name: "Saree",
      price: "5,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+4",
      name: "Suit Set",
      price: "6,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+5",
      name: "Co-ord Set",
      price: "3,299.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+6",
      name: "Dress",
      price: "2,799.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+7",
      name: "Lehenga",
      price: "7,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+8",
      name: "Top & Shirt",
      price: "1,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+9",
      name: "Kurti Set",
      price: "3,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+10",
      name: "Salwar Kameez",
      price: "4,199.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+11",
      name: "Shirt",
      price: "1,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+12",
      name: "Blouse",
      price: "2,199.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+13",
      name: "Jumpsuit",
      price: "3,599.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+14",
      name: "Palazzo",
      price: "2,999.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+15",
      name: "Tops",
      price: "1,899.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+16",
      name: "Leggings",
      price: "1,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+17",
      name: "Maxi Dress",
      price: "4,799.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+18",
      name: "Skirt",
      price: "2,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+19",
      name: "Kurti with Dupatta",
      price: "3,499.00 Rs",
    },
    {
      img: "https://via.placeholder.com/300x150?text=Box+20",
      name: "Cotton Dress",
      price: "2,199.00 Rs",
    },
  ];

  return (
    <div className="rectangle-boxes-container">
      {[...Array(Math.ceil(boxes.length / 4))].map((_, rowIndex) => (
        <div className="rectangle-row" key={rowIndex}>
          {boxes.slice(rowIndex * 4, rowIndex * 4 + 4).map((box, index) => (
            <div className="rectangle-box" key={index}>
              <div className="image-container">
                <img src={box.img} alt={`Box ${index + 1}`} />
                <FaHeart className="heart-icon" />
              </div>
              <div className="product-details">
                <p className="product-name">{box.name}</p>
                <p className="product-price">{box.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RectangleBoxes;
