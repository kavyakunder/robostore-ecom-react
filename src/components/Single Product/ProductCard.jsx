import React from "react";
import "./product-card.css";
import { useWishlist } from "../../contexts/wishlist-context";

function ProductCard({ product }) {
  const { _id, name, price, img } = product;
  const { wishState, wishDispatch } = useWishlist();

  return (
    <>
      <div className="card">
        <div className="imgBx">
          <img className="card-img" src={img} alt="product-img" />
        </div>
        <div className="content">
          <div className="productName">
            <p>{name}</p>
            <p className="product-brand">Brand:Generic</p>
          </div>
          <div className="price">
            <p>₹{price}</p>
          </div>
          <div className="product-btn">
            <button className="btn-add-cart">Add to Cart</button>
            {wishState.wishlist.find((prod) => prod._id === _id) ? (
              <button
                className="btn-add-cart"
                onClick={() =>
                  wishDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: _id,
                  })
                }
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                className="btn-add-cart"
                onClick={() =>
                  wishDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                  })
                }
              >
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
