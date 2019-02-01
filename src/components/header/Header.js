import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './Header.css';

class Header extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  render() {

    return (
      <div className={styles.header}>
        <StickyContainer>
          <Sticky>{({ style }) =>
            <nav className="navbar" style={style} id="nav">
              <div className="navcontent">
                <h2 className="logo" alt="logo"
                  onClick={this.scrollToTop}>
            Mario Quintana
                </h2>
                <ul>
                  <li>
                    <Link activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Home</Link>
                  </li>
                  <li>
                    <Link activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>About</Link>
                  </li>
                  <li>
                    <Link activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Projects</Link>
                  </li>
                  <li>
                    <Link activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Contact</Link>
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