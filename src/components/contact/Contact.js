import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {

  render() {

    return (
      <div className={styles.home}>
        <header className="contactcase">
          <div className="contactcase-content">
            <div className="items">
              <div className="item">
                <i className="fab fa-linkedin-in fa-3x"></i>
                <div>
                  <h3>LinkedIn</h3>
                </div>
              </div>
              <div className="item">
                <i className="fab fa-github fa-3x"></i>
                <div>
                  <h3>GitHub</h3>
                </div>
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
    );
  }
}

export default Contact;