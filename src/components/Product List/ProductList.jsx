import React from "react";
import ProductCard from "../Single Product/ProductCard";
import Filters from "../Filters/Filters";
import { useState } from "react";
import "./product-list.css";

function ProductList({ products }) {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <div className="main-container">
        <Filters />
        <div className="category-navbar">
          <div className="category-bar">
            Showing {products.length} out of 15 results
            <div>
              Search:{" "}
              <input
                className="padding-top"
                type="text"
                placeholder="For eg:breadboard"
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="container">
            {console.log("products is", products)}
            {products.length > 0 ? (
              products
                .filter((item) => {
                  if (inputData === "") {
                    return item;
                  } else if (item.name.toLowerCase().includes(inputData)) {
                    return item;
                  }
                })
                .map((item) => {
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
