import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="home">
          <header className="homecase">
            <div className="homecase-content">
              <h1 className="home-heading">
              For Nasser, there are two absolutes, the first thing is consistency the second is intensity.
              </h1>
              <p className="lead">
              Nasser El Sombaty
              </p>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;