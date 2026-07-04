import "./Signin.css";
import { useState } from "react";
import { signUpUser, loginUser } from "../../firebase/authService";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      alert("Login Successful");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signUpUser(email, password);
      alert("Account Created Successfully");
      setIsLogin(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            isLogin ? handleLogin() : handleSignup();
          }}
        >

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="auth-btn"
            disabled={!email || !password}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Sign In"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signin;