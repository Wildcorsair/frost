import React, {Component} from 'react';
import '../css/welcome.css';

function Welcome() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-7 left-panel">
          <div className="welcome-message-container">
            <h2>Welcome to Electronic Dictionary</h2>
            <p>
              Pellentesque finibus nisi a odio porttitor facilisis.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Quisque pellentesque facilisis mollis. Sed ullamcorper et enim
              sed venenatis. Pellentesque feugiat, ante et iaculis consequat,
              ante risus finibus felis, vitae consectetur augue felis id risus.
              Vivamus ac tincidunt dui.
            </p>
          </div>
        </div>
        <div className="col-md-5 right-panel">
          <div className="login-form-container">
            <div className="login-form-title">Login to your account</div>
            <form>
              <div className="login-form-row">
                <input id="username" className="login-form-input" type="text" name="username" placeholder="Your email" value="" />
              </div>
              <div className="login-form-row">
                <input id="password" className="login-form-input" type="password" name="password" placeholder="Password" value="" />
              </div>
              <div className="">
                <input id="login" className="" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
