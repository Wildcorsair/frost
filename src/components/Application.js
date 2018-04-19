import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

class Application extends Component {
  render() {
    return(
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Application;