import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Streamable from './Streamable';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="linkContainer">
          <Link to="/series">
            <Streamable
              img={'https://placekitten.com/100/100'}
              title={'Series'}
            />
          </Link>
        </div>
        <div className="linkContainer">
          <Link to="/movies">
            <Streamable
              img={'https://placekitten.com/100/100'}
              title={'Movies'}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
