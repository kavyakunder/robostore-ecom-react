import React from "react";
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
              <a className="link-undecorated" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className="link-undecorated" href="./product-page.html">
                Shop{" "}
              </a>
            </li>
            <li>
              <a className="link-undecorated" href="./login.html">
                Login
              </a>
            </li>
          </ul>
          <a href="./wishlist.html">
            <FavoriteBorderIcon className="icon-style"></FavoriteBorderIcon>
          </a>
          <a href="./cart-management.html">
            <ShoppingCartIcon className="icon-style" />
          </a>
          <a href="./logout.html">
            <LogoutIcon className="icon-style" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
