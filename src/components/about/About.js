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
                  <div className="bio">
                    <h1>About</h1>
                    <p>Born and raised in Oregon, I had a humble upbringing harvesting for many years with my family the orchards of Hood River. With time I was exposed to technology through video games, computers at school, and the rise of the internet. As technology improved I found myself watching TechTV, reading technology magazines, and consuming any information. However,one day I found a online tutorial on how to build a webpage. I created a crude webpage of my favorite car and for the first time I realized that I wanted to be a developer. I spend my free time training as powerlifter and reading as well.</p>
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