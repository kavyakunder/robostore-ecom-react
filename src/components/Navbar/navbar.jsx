import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo-title">
          <img
            className="navbar-logo"
            src="assets/images/homepage/brand-logo.png"
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
            <li>
              <Link className="link-undecorated" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <Link to="/wishlist">
            <i className="navbar-icons far fa-heart fa-lg"></i>
          </Link>
          <Link to="/cart">
            <i className="navbar-icons fas fa-shopping-cart fa-lg"></i>
          </Link>
          <Link to="/logout">
            <i class="navbar-icons fas fa-sign-out-alt fa-lg"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
