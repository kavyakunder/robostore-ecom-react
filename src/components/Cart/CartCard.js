import React from "react";
import { useCart } from "../../contexts/cart-context";

function CartCard({ product }) {
  const { _id, name, img, price, category, quantity } = product;

  const { cartDispatch } = useCart();

  return (
    <>
      <div className="cart-product" id={_id}>
        <i
          onClick={() =>
            cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
          }
          className="fas fa-times"
        ></i>
        <img className="cart-img" src={img} alt={name} />
        <p>{name}</p>
        <p>₹{price}</p>
        <div>
          <button
            onClick={() =>
              cartDispatch({ type: "INCREASE_QUANTITY", payload: _id })
            }
            className="btn-inc-dec"
          >
            +
          </button>
          {quantity}
          <button
            onClick={() =>
              cartDispatch({ type: "DECREASE_QUANTITY", payload: _id })
            }
            className="btn-inc-dec"
          >
            -
          </button>
        </div>
        <p>₹{price}</p>
      </div>
      <hr />
    </>
  );
}

export default CartCard;
