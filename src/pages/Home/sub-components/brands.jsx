import React from "react";

function Brands() {
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Brands</h1>
      <div className="brands-deals">
        <div className="brand-img">
          <img src="assets/images/homepage/iotf-brand.png" alt="iotif-brand" />
        </div>
        <div className="brand-img">
          <img
            src="assets/images/homepage/microbit-brand.png"
            alt="microbit-brand"
          />
        </div>
        <div className="brand-img">
          <img
            src="assets/images/homepage/soldron-brand.png"
            alt="soldron-brand"
          />
        </div>
        <div className="brand-img">
          <img
            src="assets/images/homepage/rasberry-brand.png"
            alt="rasberry-brand"
          />
        </div>
        <div className="brand-img">
          <img
            src="assets/images/homepage/arduino-brand.png"
            alt="arduino-brand"
          />
        </div>
      </div>
    </section>
  );
}

export default Brands;
