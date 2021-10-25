import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';

//you can only return one item (div, etc.) per component!! Javascript functions only return 1 item!! You can nest it though.

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Tristan's Portfolio Project</h1>
        <div>
          { moment().format( 'MMMM Do YYYY, h:mm:ss a' ) }
        </div>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
