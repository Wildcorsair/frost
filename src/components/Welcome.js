import React, {Component} from 'react';
import LoginService from '../services/LoginService';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    const loginService = new LoginService();
    let isAuthenticated = loginService.authentication(this.state.username, this.state.password);

    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7 left-panel">
            <div className="welcome-message-container">
              <h2>Welcome to Electronic Dictionary</h2>
              <p className="welcome-message">
                Pellentesque finibus nisi a odio porttitor facilisis.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Quisque pellentesque facilisis mollis. Sed ullamcorper et enim
                sed venenatis. Pellentesque feugiat, ante et iaculis consequat,
                ante risus finibus felis, vitae consectetur augue felis id risus.
                Vivamus ac tincidunt dui.
              </p>
              <div>
                <a href="#" className="ed-btn btn-register">Register</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 right-panel">
            <div className="login-form-container">
              <div className="login-form-title">Login to your account</div>
              <form onSubmit={this.handleLogin}>
                <div className="login-form-row">
                  <input
                    id="username"
                    className="login-form-input"
                    type="text"
                    placeholder="Your email"
                    value={this.state.username}
                    onChange={this.handleUsername}
                  />
                </div>
                <div className="login-form-row">
                  <input
                    id="password"
                    className="login-form-input"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
                <div>
                  <input id="login" className="ed-btn btn-login" type="submit" value="Login" />
                  <a className="forgot-password-link" href="#">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
