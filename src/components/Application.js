import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Content from './Content';
import '../css/application.css';

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  };
}

class Application extends Component {
  render() {
    return(
      <div className="container">
        <Header user={this.props.user} />
        <Content />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Application);
