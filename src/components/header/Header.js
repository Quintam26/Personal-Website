import React, { Component } from 'react';
import { a } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav className="navbar">
          <h2 className="logo">
            Mario Quintana
          </h2>
          <ul>
            <li>
              <a exact activeClassName="active" to="/">Home</a>
            </li>
            <li>
              <a exact activeClassName="active" to="/about" >About</a>
            </li>
            <li>
              <a exact activeClassName="active" to="/projects" >Projects</a>
            </li>
            <li>
              <a activeClassName="active" to="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;