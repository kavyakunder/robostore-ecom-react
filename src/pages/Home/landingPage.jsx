import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import Reason from "./sub-components/reason";
import TopCategories from "./sub-components/top-categories";
import Brands from "./sub-components/brands";
import FeaturedProducts from "./sub-components/feature-product";
import { Footer } from "../../components/components";
function Landing() {
  return (
    <section>
      <div className="main-img">
        <div className="avatar-img">
          <img src="assets/images/homepage/hero.png" alt="hero-image" />
        </div>
        <div className="title">
          <h1 className="brand-name">RoboStore</h1>
          <h2 className="brand-tagline">We build because we can!</h2>
          <button className="btn-shop">
            <Link className="shop-link" to="/products">
              Shop Now
            </Link>
          </button>
        </div>
      </div>
      <Reason />
      <TopCategories />
      <Brands />
      <FeaturedProducts />
      <Footer />
    </section>
  );
}

export default Landing;
