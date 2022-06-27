import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./navbar.css";
import { toast } from "react-hot-toast";
function Navbar() {
  const { auth, setAuth } = useAuth();
  const redirect = useNavigate();

  const signoutAuth = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
    }));
    toast.success("Logout succesful");
    redirect("/");
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo-title">
          <img
            className="navbar-logo"
            src="assets/images/homepage/robostore-favicon.png"
            alt="brand-name"
          />
          <h3 className="store-name">RoboStore</h3>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link className="link-undecorated" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-undecorated" to="/products">
                Shop
              </Link>
            </li>
          </ul>
          {auth.isAuth === true ? (
            <>
              <Link to="/wishlist">
                <i className="navbar-icons far fa-heart fa-lg"></i>
              </Link>
              <Link to="/cart">
                <i className="navbar-icons fas fa-shopping-cart fa-lg"></i>
              </Link>
              <Link to="/" onClick={() => signoutAuth(setAuth)}>
                <i class="navbar-icons fas fa-sign-out-alt fa-lg"></i>
              </Link>
            </>
          ) : (
            <Link className="link-undecorated" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
