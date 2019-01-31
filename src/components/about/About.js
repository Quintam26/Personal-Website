import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {

  render() {

    return (
      <div className={styles.home}>
        <main className="aboutcase">
          <div className="aboutcase-content">
            <img src={require('../../assets/mq.png')}/>
            <div className="items">
              <div className="item">
                <div>
                  <h1>About</h1>
                  <p>Born and raised in Parkdale, Oregon. At a young age began harvesting various fruits with his family during the summer breaks. Also has German and Lab mix dog named Lucy.
                  Graduated from Portland State University in 2015. Majored in International Studies with a focus on Latin America. Also Attended Alchemy Code Lab in 2018 focusing on Full-Stack JavaScript.
                  An avid reader of philosophy, biographies, international development, and classics. Dedicates his lifestyle to powerlifting and the pursuit of greater strength.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;