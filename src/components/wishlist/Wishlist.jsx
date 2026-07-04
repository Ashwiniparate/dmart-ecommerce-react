import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import { addToCart } from "../store/cartSlice";
import "./Wishlist.css";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Wishlist is Empty ❤️</h2>;
  }

  return (
    <div className="wishlist-container">

      <h2>My Wishlist ❤️</h2>

      {wishlist.map((item) => (
        <div className="wishlist-item" key={item.id}>

          <img src={item.image} alt={item.name} />

          <div className="wishlist-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="wishlist-buttons">

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  )
                }
              >
                🛒 Move to Cart
              </button>

              <button
                className="remove"
                onClick={() => dispatch(removeFromWishlist(item.id))}
              >
                Remove
              </button>

            </div>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Wishlist;