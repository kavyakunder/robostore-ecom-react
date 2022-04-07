import React from "react";
import { useCart } from "../../contexts/cart-context";

function CartPrice() {
  const { cartState } = useCart();
  const itemsPrice = cartState.cart.reduce(
    (acc, currVal) => acc + Number(currVal.price) * Number(currVal.quantity),
    0
  );
  const shippingPrice = 50;
  return (
    <>
      <div className="carts-total">
        <h2>CART TOTALS</h2>
        <table className="checkout-table">
          <tr>
            <td>No of items</td>
            <td>{cartState.cart.length}</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>₹{itemsPrice}</td>
          </tr>
          <tr>
            <td>Shipping Price</td>
            <td>₹50</td>
          </tr>
          <tr>
            <td className="total">Total</td>
            <td className="total">₹{Math.round(itemsPrice + shippingPrice)}</td>
          </tr>
        </table>
        <button className="btn-checkout">Proceed to checkout</button>
      </div>
    </>
  );
}

export default CartPrice;
