import React from "react";
import "./logout.css";
function Logout() {
  return (
    <>
      <div class="logout-div">
        <div class="logout-logo">
          <img
            src="assets/images/homepage/brand-logo.png"
            alt="brand-logo"
            class="brand-logo"
          />
        </div>
        <div class="title">RoboStore</div>
        <div class="sub-title">Tech Equipments</div>
        <div class="form">
          <p>Are you sure you want to logout?</p>
          <div class="logout-section">
            <a class="logout yes" href="#">
              Yes
            </a>
            <a class="logout cancel" href="#">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
