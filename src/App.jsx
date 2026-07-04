import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Navbar from "./components/navbar/Navbar.jsx";

import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./components/home/Home.jsx";
import Signin from "./components/sign-in/Signin.jsx";
import Profile from "./components/profile/Profile.jsx";
import Products from "./components/products/Products.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import ProductsDetails from "./components/product-details/ProductsDetails.jsx";
import Wishlist from "./components/wishlist/Wishlist.jsx";
import Checkout from "./components/checkout/Checkout.jsx";


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="app">

      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
       <Route path="/ProductsDetails/:id" element={<ProductsDetails />} />
       <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Protected Route */}
        <Route
          path="/profile"
          element={
            user ? <Profile /> : <Navigate to="/auth" />
          }
        />
      </Routes>

    </div>
  );
}

export default App;