//Importing router elements
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// Importing Components
import Home from '../ui/Home';
import About from '../ui/About';
import Contact from '../ui/Contact';
import Affiliates from '../ui/Affiliates';
import Business from '../ui/Business';
import Support from '../ui/Support';
import NotFound from '../ui/NotFound';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} /*onEnter={onEnterPublicPage}*//>
      <Route path="/about" exact component={About} /*onEnter={onEnterPrivatePage}*//>
      <Route path="/contact" exact component={Contact} /*onEnter={onEnterPrivatePage}*//>
      <Route path="/affiliates" exact component={Affiliates} /*onEnter={onEnterPrivatePage}*//>
      <Route path="/business" exact component={Business} /*onEnter={onEnterPrivatePage}*//>
      <Route path="/support" exact component={Support} /*onEnter={onEnterPrivatePage}*//>
      <Route path="*" exact component={NotFound}/>
    </Switch>
  </BrowserRouter>
);
