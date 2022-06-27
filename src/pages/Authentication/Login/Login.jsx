import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-context";
import { loginAuth } from "../../../services/loginService";
import "./login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  console.log("setAuth is", setAuth);

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const testLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const loginSubmitHandler = async (user) => {
    try {
      const { encodedToken, foundUser } = await loginAuth(user);

      if (encodedToken) {
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
        localStorage.setItem("user", JSON.stringify(foundUser.firstName));

        setAuth(() => ({
          isAuth: true,
          token: encodedToken,
          user: foundUser.firstName,
        }));
        navigate("/products");
        toast.success("Login is successful");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setLoginError("This is error msg", error.message);
    }
  };
  const testLoginHandler = async (user) => {
    setUser(testLogin);
    loginSubmitHandler(user);
    toast.success("Logged out successfully!");
  };

  return (
    <div>
      <form
        className="login-div"
        onSubmit={(e) => {
          e.preventDefault();
          loginSubmitHandler(user);
        }}
      >
        <div className="logo">
          <img
            src="assets/images/homepage/robostore-favicon.png"
            alt="brand-logo"
            className="brand-logo"
          />
        </div>
        <div className="title">RoboStore</div>
        <div className="sub-title">Tech Equipments</div>
        <div className="form">
          <div className="username">
            <i className="far fa-user fa-lg icons">
              <input
                type="text"
                placeholder="Username or email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </i>
          </div>
          <div className="password">
            <i className="fas fa-lock fa-lg icons">
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </i>
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" />
              <label for="remember-me">Remember Me</label>
            </div>
            <div className="forgot-password">
              <a className="login-links" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="btn-entry">Login</button>
          <button
            className="btn-entry"
            onClick={(e) => {
              e.preventDefault();
              testLoginHandler(testLogin);
            }}
          >
            Login with test credentials
          </button>
          <div className="sign-up">
            <Link className="login-links" to="/signup">
              New to RoboNote?Sign Up here!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
