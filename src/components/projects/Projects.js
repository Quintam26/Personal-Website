import React, { Component } from 'react';
import styles from './Projects.css';

class Projects extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="projectcase">
          <h1>Projects</h1>
          <div className="gallery">
            <figure className="gallery__item gallery__item--1">
              <img src={require('../../assets/edge.png')} className="gallery__img" alt="Image 1"/>
            </figure>
            <figure className="gallery__item gallery__item--2">
              <img src={require('../../assets/contact.png')} className="gallery__img" alt="Image 2"/>
            </figure>
            <figure className="gallery__item gallery__item--3">
              <img src={require('../../assets/auto.png')} className="gallery__img" alt="Image 3"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
              <img src={require('../../assets/citysecrets.png')} className="gallery__img" alt="Image 4"/>
            </figure>
            <figure className="gallery__item gallery__item--5">
              <img src={require('../../assets/reaction.png')} className="gallery__img" alt="Image 5"/>
            </figure>
            <figure className="gallery__item gallery__item--6">
              <img src={require('../../assets/client.png')} className="gallery__img" alt="Image 6"/>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;