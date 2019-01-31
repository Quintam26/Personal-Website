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
              <a target="_blank"><img src={require('../../assets/edge.png')} className="gallery__img" alt="Image 1"/></a>
            </figure>
            <figure className="gallery__item gallery__item--2">
              <a href="https://github.com/Quintam26/Contact-Manager" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/contact.png')} className="gallery__img" alt="Image 2"/></a>
            </figure>
            <figure className="gallery__item gallery__item--3">
              <a href="https://github.com/Quintam26/AutoSearch-App" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/auto.png')} className="gallery__img" alt="Image 3"/></a>
            </figure>
            <figure className="gallery__item gallery__item--4">
              <a href="https://github.com/team-anchor/city-secrets-app" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/citysecrets.png')} className="gallery__img" alt="Image 4"/></a>
            </figure>
            <figure className="gallery__item gallery__item--5">
              <a href="https://github.com/Quintam26/app-layout-redesign/tree/dev" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/reaction.png')} className="gallery__img" alt="Image 5"/></a>
            </figure>
            <figure className="gallery__item gallery__item--6">
              <a href="https://github.com/Quintam26/Client-Panel/tree/master"  target="_blank" rel="noopener noreferrer"><img src={require('../../assets/client.png')} className="gallery__img" alt="Image 6"/></a>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;