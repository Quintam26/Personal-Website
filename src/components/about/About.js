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
                    <p>Mario born and raised in Parkdale, Oregon was molded by the extreme working conditions in the orchards his family and he harvested for many years. His tenacious nature can be seen by the discipline that defines his personal development. Following a rigorous powerlifting program, adhering to a unmerciful diet, reading books in philosophy, international development, history and the classics Mario seeks to master himself.</p>
                  </div>
                  <br/>
                  <div className="skl">
                    <h1>Skills</h1>
                    <p><strong>Languages</strong> - JavaScript,HTML/CSS <strong>Frameworks/Libraries</strong> - React, Jest, Redux, NodeJS, Express, Mocha, Chai, Mongoose <strong>Databases</strong> - MongoDB, Firebase, PostgreSQL <strong>Tools</strong> - Heroku, Git, GitHub <strong>Dev Practices</strong> - TDD/BDD <strong>Bilingual</strong> - English, Spanish</p>
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