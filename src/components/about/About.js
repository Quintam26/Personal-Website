import React, { Component } from 'react';
import Header from '../header/Header';
import styles from './About.css';

class About extends Component {

  render() {

    return (
      <div className={styles.home}>
        <header className="aboutcase">
          <Header/>
          <div className="aboutcase-content">
            <img src={require('../../assets/13.png')}/>
            <div className="items">
              <div className="item">
                <i className="fas fa-mountain fa-2x"></i>
                <div>
                  <h3>Background</h3>
                  <p>Born and raised in Parkdale, Oregon. At a young age began harvesting various fruits with his family during the summer breaks. Also has German and Lab mix dog named Lucy.</p>
                </div>
              </div>
              <div className="item">
                <i className="fas fa-university fa-2x"></i>
                <div>
                  <h3>Education</h3>
                  <p>Graduated from Portland State University in 2015. Majored in International Studies with a focus on Latin America. Also Attended Alchemy Code Lab in 2018 focusing on Full-Stack JavaScript</p>
                </div>
              </div>
              <div className="item">
                <i className="fas fa-dumbbell fa-2x"></i>
                <div>
                  <h3>Hobbies</h3>
                  <p>An avid reader of philosophy, biographies, international development, and classics. Dedicates his lifestyle to powerlifting and the pursuit of greater strength.</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default About;