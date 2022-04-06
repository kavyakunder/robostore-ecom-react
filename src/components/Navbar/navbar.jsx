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
              <a className="link-undecorated" href="./login.html">
                Login
              </a>
            </li>
          </ul>
          <Link to="/wishlist">
            <FavoriteBorderIcon className="icon-style"></FavoriteBorderIcon>
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon className="icon-style" />
          </Link>
          <a href="./logout.html">
            <LogoutIcon className="icon-style" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
