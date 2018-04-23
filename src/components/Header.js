import React, {Component} from 'react';

function Header(props) {
  return(
    <header className="row">
      <div className="col-md-8">ED</div>
      <div className="col-md-4">User: {props.user}</div>
    </header>
  );
}

export default Header;
