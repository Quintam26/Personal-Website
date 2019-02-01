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
              One does not accumulate but eliminate. It is not daily increase but daily decrease. The height of cultivation always runs to simplicity
              </h1>
              <p className="lead">
              Bruce Lee
              </p>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;