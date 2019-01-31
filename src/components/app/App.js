import React, { Component } from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


class App extends Component {

  render() {

    return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;