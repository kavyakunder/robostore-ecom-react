import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { AuthProvider } from "./contexts/auth-context";

import { makeServer } from "./server";
import { AddressProvider } from "./contexts/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
