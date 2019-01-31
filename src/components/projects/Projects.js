import React, { Component } from 'react';
import Header from '../header/Header';
import styles from './Projects.css';

class Projects extends Component {

  render() {

    return (
      <div className={styles.home}>
        <header className="homecase">
          <Header/>
          <div className="homecase-content">
            <h1 className="home-heading">
              Projects
            </h1>
            <p className="lead">
              
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Projects;