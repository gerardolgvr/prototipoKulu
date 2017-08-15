import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

Meteor.startup(() => {
  ReactDOM.render(<h1>Hola Mundo desde ReactJS</h1>, document.getElementById('app'));
});
