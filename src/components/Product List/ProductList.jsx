import React from "react";
import ProductCard from "../Single Product/ProductCard";
import Filters from "../Filters/Filters";
import "./product-list.css";

function ProductList({ products }) {
  return (
    <>
      <div className="main-container">
        <Filters />
        <div className="category-navbar">
          <div className="category-bar">
            Showing {products.length} out of 15 results
          </div>
          <div className="container">
            {console.log("products is", products)}
            {products.length > 0 ? (
              products.map((item) => {
                return <ProductCard product={item} key={item._id} />;
              })
            ) : (
              <h2>No Products found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
