//Importing router elements
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

// Importing Components
import Home from '../ui/Home';
import About from '../ui/About';
import Contact from '../ui/Contact';
import Affiliates from '../ui/Affiliates';
import Business from '../ui/Business';
import Support from '../ui/Support';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';

const browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup', '/about', '/contact', '/affiliates', '/business', '/support', '/login'];
const authenticatedPages = ['/dashboard'];
const onEnterPublicPage = () => { //si un usuario logueado quiere entrar a una pagina publica lo redirigimos a la seccion privada
  if(Meteor.userId()){
    browserHistory.replace('/dashboard');
  }
}
const onEnterPrivatePage = () => { //si un usuario no esta logueado lo regresamos al login (previene regresar a un lugar con las flechas)
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.location;
  alert(pathname);
  const isUnauntheticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  //
  if(isAuthenticated && isUnauntheticatedPage){//if on unauthenticated page and logged in, redirect to /links
    browserHistory.replace('/dashboard');
  } else if(!isAuthenticated && isAuthenticatedPage){//if on authenticated page and not logged in redirect to /
    browserHistory.replace('/');
  }
}

export const routes = (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path="/" exact component={Home} onEnter={onEnterPublicPage}/>
      <Route path="/about" exact component={About} onEnter={onEnterPublicPage}/>
      <Route path="/contact" exact component={Contact} onEnter={onEnterPublicPage}/>
      <Route path="/affiliates" exact component={Affiliates} onEnter={onEnterPublicPage}/>
      <Route path="/business" exact component={Business} onEnter={onEnterPublicPage}/>
      <Route path="/support" exact component={Support} onEnter={onEnterPublicPage}/>
      <Route path="/login" exact component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/signup" exact component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/dashboard" exact component={Dashboard} onEnter={onEnterPrivatePage}/>
      <Route path="*" exact component={NotFound}/>
    </Switch>
  </BrowserRouter>
);
