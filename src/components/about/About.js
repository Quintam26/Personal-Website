import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {

  render() {

    return (
      <div className={styles.home}>
        <div className="about">
          <main className="aboutcase">
            <div className="aboutcase-content">
              <img src={require('../../assets/mq.png')}/>
              <div className="items">
                <div className="item">
                  <div>
                    <h1>About</h1>
                    <p>Mario born and raised in Parkdale, Oregon was molded by the extreme working conditions in the orchards his family and he harvested for many years. His tenacious nature can be seen by the discipline that defines his personal development. From following a strict powerlifting program, adhering to a rigorous diet, to reading books in philosophy, inernational development, history, and the classics Mario seeks to master himself.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default About;