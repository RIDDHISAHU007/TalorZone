import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import Tops from "./pages/Tops.jsx";
import Dresses from "./pages/Dresses.jsx";
import Jump from "./pages/Jump.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./App.css"; // Add App.css to manage layout styles
import EthnicPage from "./pages/EthnicPage.jsx"; // Check this path
import Wish from "./pages/Wish.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div
          className="main-content"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            className="content-with-sidebar"
            style={{ display: "flex", flexGrow: 1 }}
          >
            <main className="content-area" style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ethnic-wear" element={<EthnicPage />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/dresses" element={<Dresses />} />
                <Route path="/co-ords-jumpsuits" element={<Jump />} />
                <Route path="//tops-shirts" element={<Tops />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/wishlist" element={<Wish />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="/products" element={<h1>Products Page</h1>} />
                <Route path="/about" element={<h1>About Us Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />
                <Route path="/cart" element={<h1>Cart Page</h1>} />
              </Routes>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
