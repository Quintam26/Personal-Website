import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { a } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  

  render() {

    return (
      <div className={styles.header}>
        <StickyContainer>
          <Sticky>{({ style }) =>
            <nav className="navbar" style={style}>
              <div className="navcontent">
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
              </div>
            </nav>
          }</Sticky>
        </StickyContainer>
      </div>
    );
  }
}

export default Header;