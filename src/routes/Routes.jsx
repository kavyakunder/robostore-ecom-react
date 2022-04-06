import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "../pages/Home/landingPage";
import ProductsPage from "../pages/Products/ProductsPage";
import WishlistPage from "../pages/Wishlist/Wishlist";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/mockman" element={<Mockman></Mockman>} />
    </Routes>
  );
}
