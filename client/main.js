import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

// Importing routes
import { routes, onAuthChange} from '../imports/routes/routes';

// Import Tether.js - Bootstrap tooltip requires Tether.
// We also add 'global.Tether' as a workaround for Meteor.
import tether from 'tether';
global.Tether = tether;
// Import Bootstrap js npm module.cmd
bootstrap = require('bootstrap');

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId(); //verifica que tenga un contenido y nos regresa true si hay algo false si no hay nada
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
