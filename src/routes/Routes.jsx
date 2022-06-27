import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "../pages/Home/landingPage";
import ProductsPage from "../pages/Products/ProductsPage";
import WishlistPage from "../pages/Wishlist/Wishlist";
import CartPage from "../pages/CartPage/CartPage";
import Login from "../pages/Authentication/Login/Login";
// import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import { PrivateRoutes } from "./PrivateRoutes";
export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/mockman" element={<Mockman></Mockman>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
