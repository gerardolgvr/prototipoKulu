import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

// Importing routes
import { routes } from '../imports/routes/routes';

// Import Tether.js - Bootstrap tooltip requires Tether.
// We also add 'global.Tether' as a workaround for Meteor.
import tether from 'tether';
global.Tether = tether;
// Import Bootstrap js npm module.
bootstrap = require('bootstrap');

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
