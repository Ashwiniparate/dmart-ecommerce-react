import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../firebase/authService";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar({ user }) {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  
const wishlist = useSelector((state) => state.wishlist.items);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/auth");
  };

  return (
    <nav className="navbar">

      {/* BRAND */}
      <div id="brand">
        <h1>DMart</h1>
      </div>

      {/* MENUS */}
      <div id="menus">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div id="icons">

        {/* CART COUNT */}
        <Link to="/cart">
          🛒 {cart?.totalQuantity || 0}
        </Link>

        <Link to="/wishlist">
  ❤️ {wishlist.length}
</Link>


        {/* USER AUTH */}
        {user ? (
          <>
            <span className="user-email">
              {user.email}
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth">Login</Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;