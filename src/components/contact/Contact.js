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
                    <i className="fab fa-linkedin-in fa-3x"></i>
                    <div>
                      <h3>LinkedIn</h3>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="https://github.com/Quintam26"target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-3x"></i>
                    <div>
                      <h3>GitHub</h3>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <i className="fab fa-twitter fa-3x"></i>
                  <div>
                    <h3>Twitter</h3>
                  </div>
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