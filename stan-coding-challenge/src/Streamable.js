import React, { Component } from 'react';
import './Streamable.css';

class Streamable extends Component {
  render() {
    return (
      <div className="streamable">
        <div className="card">
          <img className="card-img-top" src={this.props.img} alt="img" />
          <div className="card-body">
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Streamable;
