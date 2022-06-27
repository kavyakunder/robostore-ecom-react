import React from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/Cart/CartCard";
import CartPrice from "../../components/Cart/CartPrice";
import { Footer } from "../../components/components";
import { useCart } from "../../contexts/cart-context";
import "./cart-page.css";

function CartPage() {
  const { cartState } = useCart();
  return (
    <>
      <h1 className="cart-title">My Cart</h1>
      <div className="cart-container">
        <div className="cart-products">
          {cartState.cart.length > 0 ? (
            cartState.cart.map((item) => {
              return <CartCard product={item} key={item._id} />;
            })
          ) : (
            <div>
              <p className="alert-container alert-error txt-medium">
                No products found in Cart
              </p>
              <Link to="/products">
                <button className="btn-checkout">Shop Now</button>
              </Link>
            </div>
          )}
        </div>
        <CartPrice />
      </div>
    </>
  );
}

export default CartPage;
