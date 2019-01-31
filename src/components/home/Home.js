import React, { Component } from 'react';
import Header from '../header/Header';
import styles from './Home.css';

class Home extends Component {

  render() {

    return (
      <div className={styles.home}>
        <header className="homecase">
          <Header/>
          <div className="homecase-content">
            <h1 className="home-heading">
              Reps For Jesus
            </h1>
            <p className="lead">
              For Nasser, there are two absolutes, the first thing is consistency the second is intensity
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;