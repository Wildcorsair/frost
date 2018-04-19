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
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" className="form-control" type="text" name="username" value="" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" className="form-control" type="password" name="password" value="" />
              </div>
              <div className="form-group">
                <input id="login" className="btn btn-default" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
