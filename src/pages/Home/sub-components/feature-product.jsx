import React from "react";
import { products } from "../../../backend/db/products";
function FeaturedProducts() {
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Featured Products</h1>
      <div className="featured-container">
        {products
          .map((eachProduct) => {
            return (
              <div className="featured-card">
                <img src={eachProduct.img} alt={eachProduct.name} />
                <div className="price-info">
                  <h2>₹ {eachProduct.price}</h2>
                  <h2 className="name-category">{eachProduct.name}</h2>
                </div>
              </div>
            );
          })
          .slice(4, 8)}
      </div>
    </section>
  );
}

export default FeaturedProducts;
