import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import About from '../Routes/About';
import PSearch from '../Routes/Place/PSearch';
import Manage from '../Routes/Place/Manage';
import UDetail from '../Routes/User/UDetail';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={PSearch} />
      <Route exact path="/place/manage" component={Manage} />
      <Route exact path="/user" component={UDetail} />
    </Switch>
  );
};

export default Router;
