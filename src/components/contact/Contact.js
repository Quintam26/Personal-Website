import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="contact">
          <header className="contactcase">
            <div className="contactcase-content">
              <h1>Contact</h1>
              <div className="items">
                <div className="item">
                  <a href="https://www.linkedin.com/in/mario-quintana/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in fa-4x"></i>
                    <div>
                      <h3 className="link">LinkedIn</h3>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="https://github.com/Quintam26" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-4x"></i>
                    <div>
                      <h3 className="git">GitHub</h3>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="https://twitter.com/RepsforStrength" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-4x"></i>
                    <div>
                      <h3 className="twi">Twitter</h3>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope fa-4x"></i>
                    <div>
                      <h3 className="ema">pyrros2000@gmail.com</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Contact;