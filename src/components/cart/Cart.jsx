import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  if (cartItems.length === 0) {
    return <h2 className="empty">Your Cart is Empty 🛒</h2>;
  }

  return (
    <div className="cart-container">

      <h2>🛒 My Cart</h2>

      <button className="clear-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>

          <img src={item.image} alt="" />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty-box">
              <button onClick={() => dispatch(decreaseQty(item.id))}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => dispatch(increaseQty(item.id))}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      

      <div className="cart-summary">
        <h3>Total Items: {totalQuantity}</h3>
        <h2>Total Price: ₹{totalPrice}</h2>
      </div>


      <button
  onClick={() => navigate("/checkout")}
  className="checkout-btn"
>
  Proceed to Checkout
</button>

    </div>

    



  );
}

export default Cart;