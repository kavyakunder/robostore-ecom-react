import React from "react";

function TopCategories() {
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Top Categories</h1>
      <div className="top-categories">
        <div className="category-card">
          <div className="category-img">
            <img
              src="assets/images/homepage/3d-printers.jpg"
              alt="3D printers"
            />
          </div>
          <p>3D Printers</p>
        </div>
        <div className="category-card">
          <div className="category-img">
            <img src="assets/images/homepage/arduino-board.jpg" alt="Arduino" />
          </div>
          <p>Arduino</p>
        </div>
        <div className="category-card">
          <div className="category-img">
            <img
              src="assets/images/homepage/8051board.png"
              alt="Development Boards"
            />
          </div>
          <p>Development Boards</p>
        </div>
        <div className="category-card">
          <div className="category-img">
            <img src="assets/images/homepage/displays.jpg" alt="Displays" />
            <p>Displays</p>
          </div>
        </div>
        <div className="category-card">
          <div className="category-img">
            <img
              src="assets/images/homepage/diy-kits.jpg"
              alt="DIY Robot Kits"
            />
          </div>
          <p>DIY Robot Kits</p>
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
