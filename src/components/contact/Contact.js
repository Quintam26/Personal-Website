import React, { Component } from 'react';
import Header from '../header/Header';
import styles from './Contact.css';

class Contact extends Component {

  render() {

    return (
      <div className={styles.home}>
        <header className="homecase">
          <Header/>
          <div className="homecase-content">
            <h1 className="home-heading">
              Contact
            </h1>
            <p className="lead">
            
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Contact;