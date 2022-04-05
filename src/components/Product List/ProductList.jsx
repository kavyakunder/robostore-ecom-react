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
            <div className="sort-by">
              <p>Sort by:</p>
            </div>
          </div>
          <div className="container">
            {console.log("products is", products)}
            {products.length > 0 ? (
              products.map((item) => {
                return <ProductCard product={item} key={item._id} />;
              })
            ) : (
              <p className="alert-container alert-error txt-medium">
                No Products Found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
