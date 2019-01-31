import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/projects" component={Projects}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;