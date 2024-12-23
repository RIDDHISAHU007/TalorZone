import React, { useState } from "react";
import "./CartPage.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sharara Set",
      price: 2999,
      quantity: 1,
      img: "https://via.placeholder.com/150x100?text=Sharara+Set",
    },
    {
      id: 2,
      name: "Kurti Set",
      price: 3999,
      quantity: 2,
      img: "https://via.placeholder.com/150x100?text=Kurti+Set",
    },
  ]);

  const handleQuantityChange = (id, action) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              action === "increase"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">₹{item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">
          Your cart is empty. Start shopping now!
        </p>
      )}
    </div>
  );
}

export default CartPage;
