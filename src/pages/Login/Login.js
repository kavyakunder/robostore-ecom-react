import React from "react";
import "./login.css";
function Login() {
  return (
    <>
      <div class="login-div">
        <div class="logo">
          <img
            src="assets/images/homepage/brand-logo.png"
            alt="brand-logo"
            class="brand-logo"
          />
        </div>
        <div class="title">RoboStore</div>
        <div class="sub-title">Tech Equipments</div>
        <div class="form">
          <div class="username">
            <i class="far fa-user fa-lg icons">
              <input type="text" placeholder="Username or email" />
            </i>
          </div>
          <div class="password">
            <i class="fas fa-lock fa-lg icons">
              <input type="password" placeholder="Password" />
            </i>
          </div>
          <div class="options">
            <div class="remember-me">
              <input type="checkbox" />
              <label for="remember-me">Remember Me</label>
            </div>
            <div class="forgot-password">
              <a class="login-links" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button class="btn-entry">LOGIN</button>
          <div class="sign-up">
            <a class="login-links" href="./signup.html">
              New to RoboStore?Sign Up here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
