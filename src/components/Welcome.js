import React, {Component} from 'react';

function Welcome() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
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
        <div className="col-md-6">
          <form>
            <label>Username</label>
            <label>Password</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;