import React from "react";
import { useWishlist } from "../../contexts/wishlist-context";

function WishListCard({ product }) {
  const { _id, name, price, img } = product;

  const { wishDispatch } = useWishlist();
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
          <button className="add-cart">Add To Cart</button>
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
