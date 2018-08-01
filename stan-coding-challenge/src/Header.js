import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    console.log(this.props.type);
    return (
      <div>
        <nav className="navbar navbar-expand navbar-inverse bg-primary">
          <div className="navbar-nav mr-auto">
            <Link className="link text-white" to="/">
              DEMO Streaming
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to="#" className="link text-white">
              Login
            </Link>
            <button>Start your free trial</button>
          </div>
        </nav>
        <div className="page-header text-white bg-dark">
          <h1>{`Popular ${this.props.type[0].programType}`}</h1>
        </div>
      </div>
    );
  }
}
