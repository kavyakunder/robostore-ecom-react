import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

function WishListCard({ product }) {
  const { _id, name, price, img } = product;

  const { wishDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <div className="wishlist-card" id={_id}>
        <div className="container-img">
          <img className="wishlist-img" src={img} alt={name} />
          <i className="fas fa-heart fa-2x heart"></i>
        </div>
        <h3 className="wishlist-title">{name}</h3>
        <h2 className="wishlist-price">₹{price}</h2>

        <div className="btn-add">
          {cartState.cart.find((item) => item._id === _id) ? (
            <Link to="/cart">
              <button className="btn-add-cart">Go to Cart</button>
            </Link>
          ) : (
            <button
              className="btn-add-cart"
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              <span>Add to Cart</span>
            </button>
          )}

          <button
            className="btn-trash"
            onClick={() =>
              wishDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: _id,
              })
            }
          >
            <i className="far fa-trash-alt fa-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default WishListCard;
