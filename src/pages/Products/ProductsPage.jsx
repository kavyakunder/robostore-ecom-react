import axios from "axios";
import { useEffect } from "react";
import { useProduct } from "../../contexts/product-context";
import ProductList from "../../components/Product List/ProductList";

import "./products-page.css";
import {
  filteredCategoryProducts,
  filteredPriceProducts,
  sortedProducts,
} from "../../utilities/filterFunctions";

export default function ProductsPage() {
  console.log("pro", ProductList);
  const { state, dispatch } = useProduct();
  const filteredPrice = filteredPriceProducts(state.products, state.price);
  const filteredCategory = filteredCategoryProducts(
    filteredPrice,
    state.categories.Breadboard,
    state.categories.Arduino,
    state.categories.Sensor,
    state.categories.Battery,
    state.categories.Wheels
  );
  const finalProducts = sortedProducts(filteredCategory, state.sortBy);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "INITIAL_PRODUCTS", payload: products });
      } catch (error) {
        console.log("error is", error);
      }
    })();
  }, []);
  return (
    <>
      <ProductList products={finalProducts} />
    </>
  );
}
