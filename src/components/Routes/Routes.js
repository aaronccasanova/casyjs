import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Buttons from './Buttons/Buttons';
import Cards from './Cards/Cards';
import Navigation from './Navigation/Navigation';
import LandingPages from './LandingPages/LandingPages';
import NotFound from './NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/cards" component={Cards} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/landing-pages" component={LandingPages} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
