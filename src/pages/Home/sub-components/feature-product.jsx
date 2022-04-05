import React from "react";

function FeaturedProducts() {
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Featured Products</h1>
      <div className="featured-container">
        <div className="featured-card">
          <img
            src="assets/images/homepage/arduino-board.jpg"
            alt="arduino-board"
          />
          <div className="price-info">
            <h2>$235</h2>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="assets/images/homepage/arduino-board.jpg"
            alt="arduino-board"
          />
          <div className="price-info">
            <h2>$235</h2>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="assets/images/homepage/arduino-board.jpg"
            alt="arduino-board"
          />
          <div className="price-info">
            <h2>$235</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="featured-card">
          <img
            src="assets/images/homepage/arduino-board.jpg"
            alt="arduino-board"
          />
          <div className="price-info">
            <h2>$235</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
