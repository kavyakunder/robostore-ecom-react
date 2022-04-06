import React from "react";
import "./product-card.css";

function ProductCard({ product }) {
  const { name, price, img } = product;
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
            <button className="btn-add-cart">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
