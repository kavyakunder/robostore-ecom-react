import React from "react";
import { useProduct } from "../../contexts/product-context";

const Filters = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, categories, price } = state;
  const { Arduino, Breadboard, Wheels, Sensor, Battery } = categories;
  return (
    <div>
      <div className="side-category">
        <div className="product-cat cat-margin">
          <h3>Product Categories</h3>
        </div>
        <button
          className="btn-filter"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear All
        </button>
        <div className="filter cat-margin">
          <h3>Filter by Price</h3>
          <input
            type="range"
            step="100"
            max="1000"
            min="0"
            value={price}
            onChange={(e) =>
              dispatch({ type: "PRICE", payload: e.target.value })
            }
          />
        </div>

        <div className="compare-products cat-margin">
          <h3>Price filter</h3>
          <input
            type="radio"
            name="price"
            checked={sortBy === "PRICE_LOW_TO_HIGH"}
            onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
          />
          Low to High
          <br />
          <input
            type="radio"
            name="price"
            checked={sortBy === "PRICE_HIGH_TO_LOW"}
            onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
          />
          High to Low
        </div>
        <div className="compare-products cat-margin">
          <h3>Categories</h3>
          <input
            type="checkbox"
            value="Breadboard"
            checked={Breadboard}
            onChange={() => dispatch({ type: "BREADBOARD" })}
          />
          Breadboard
          <br />
          <input
            type="checkbox"
            value="Arduino"
            checked={Arduino}
            onChange={() => dispatch({ type: "ARDUINO" })}
          />
          Arduino
          <br />
          <input
            type="checkbox"
            value="Sensor"
            checked={Sensor}
            onChange={() => dispatch({ type: "SENSOR" })}
          />
          Sensor
          <br />
          {
            <input
              type="checkbox"
              id="cat4"
              value="Battery"
              checked={Battery}
              onChange={() => dispatch({ type: "BATTERY" })}
            />
          }
          Batterys
          <br />
          {
            <input
              type="checkbox"
              value="Wheels"
              checked={Wheels}
              onChange={() => dispatch({ type: "WHEELS" })}
            />
          }
          Wheels
          <br />
        </div>
      </div>
    </div>
  );
};

export default Filters;
