import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>

          <main>
            <Home title="home"/>
            <About title="about"/>
            <Projects title="projects"/>
            <Contact title="contact"/>
          </main>
          
          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;