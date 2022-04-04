import React from "react";
import "./landingPage.css";
import Reason from "./sub-components/reason";
import TopCategories from "./sub-components/top-categories";
import Brands from "./sub-components/brands";
import FeaturedProducts from "./sub-components/feature-product";

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
            <a className="shop-link" href="./pages/product-page.html">
              Shop Now
            </a>
          </button>
        </div>
      </div>
      <Reason />
      <TopCategories />
      <Brands />
      <FeaturedProducts />
    </section>
  );
}

export default Landing;
