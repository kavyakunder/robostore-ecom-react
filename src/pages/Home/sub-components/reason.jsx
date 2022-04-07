import React from "react";

import "../landingPage.css";

function Reason() {
  return (
    <section>
      <hr className="horizontal-line" />
      <h1 className="heading">Why Robostore?</h1>
      <div className="why-robostore">
        <div className="reason-container">
          <i className="fas fa-truck fa-2x reason-icon"></i>
          <div className="reason-content">
            <p className="reason-heading">Free Delivery</p>
            <p className="reason-text">For all orders over $2000</p>
          </div>
        </div>
        <div className="reason-container">
          <i className="fab fa-whatsapp fa-2x reason-icon"></i>
          <div className="reason-content">
            <p className="reason-heading">Fast Support</p>
            <p className="reason-text">Fast Support by Whatsapp</p>
          </div>
        </div>
        <div className="reason-container">
          <i className="far fa-credit-card fa-2x reason-icon"></i>
          <div className="reason-content">
            <p className="reason-heading">Safe Payment</p>
            <p className="reason-text">100% secure payment</p>
          </div>
        </div>
        <div className="reason-container">
          <i className="far fa-handshake fa-2x reason-icon"></i>
          <div className="reason-content">
            <p className="reason-heading">Shop With Confidence</p>
            <p className="reason-text">We have easy return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reason;
