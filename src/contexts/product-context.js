import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../reducers/product-reducer";
const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, {
    sortBy: "",
    products: [],
    categories: {
      Breadboard: false,
      Arduino: false,
      Sensor: false,
      Battery: false,
      Wheels: false,
    },
    price: 1000,
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
