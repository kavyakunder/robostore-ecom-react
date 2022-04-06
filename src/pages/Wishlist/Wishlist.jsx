import React from "react";
import WishListCard from "../../components/WishList/WishListCard";
import { useWishlist } from "../../contexts/wishlist-context";
import "./wishlist.css";

function Wishlist() {
  const { wishState } = useWishlist();
  return (
    <>
      <h1 class="main-wishlist">Your Wishlist</h1>
      <div class="wishlist-container">
        {wishState.wishlist.length === 0 ? (
          <main className="wishlist-container page-container">
            <div className="alert-container alert-error txt-normal">
              Your Wishlist is empty!
            </div>
          </main>
        ) : (
          <main className="wishlist-container">
            {wishState.wishlist.map((product) => {
              return <WishListCard product={product} key={product._id} />;
            })}
          </main>
        )}
      </div>
    </>
  );
}

export default Wishlist;
