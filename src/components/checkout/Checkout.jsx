import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("🎉 Order Placed Successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  if (cartItems.length === 0) {
    return <h2 className="empty">No items to checkout 🛒</h2>;
  }

  return (
    <div className="checkout-container">

      <h2>💳 Checkout</h2>

      <div className="checkout-box">

        {/* LEFT - ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>
        </div>

        {/* RIGHT - FORM */}
        <div className="checkout-form">

          <h3>Shipping Details</h3>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="Phone Number" />

          <button onClick={placeOrder}>
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;