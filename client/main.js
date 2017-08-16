import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

// Importing routes
import { routes } from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
