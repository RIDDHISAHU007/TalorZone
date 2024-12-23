import React, { useState } from "react";
import "./Wishlist.css";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      name: "Sharara Set",
      price: "₹2,999.00",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      name: "Saree",
      price: "₹5,499.00",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      name: "Lehenga",
      price: "₹7,999.00",
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="wishlist-empty">Your wishlist is empty!</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.img} alt={item.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h3 className="wishlist-name">{item.name}</h3>
                <p className="wishlist-price">{item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
