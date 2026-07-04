import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";
import { Link } from "react-router-dom";

function Pro({ image, productName, paragraph, id }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">

      <img src={image} width="100%" height={230} />

      <h3>{productName}</h3>
      <p>{paragraph}</p>

      <Link to={`/ProductsDetails/${id}`}>
        <button>Product Details</button>
      </Link>

      {/* 🛒 ADD TO CART FIXED */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id,
              name: productName,
              price: 100,
              image,
            })
          )
        }
      >
        🛒 Add To Cart
      </button>

      {/* ❤️ WISHLIST */}
      <button
        onClick={() =>
          dispatch(
            addToWishlist({
              id,
              name: productName,
              price: 100,
              image,
            })
          )
        }
      >
        ❤️ Wishlist
      </button>

    </div>
  );
}

export default Pro;