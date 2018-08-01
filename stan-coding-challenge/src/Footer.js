import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer bg-dark bg-inverse-text">
        <div className="text text-white">
          Home | Terms and Conditions | Privacy Policy | Collection Statement |
          Help | Manage Account
        </div>
      </footer>
    );
  }
}
