import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default class NotFound extends React.Component {
  render () {
    return (
      <div className="boxed-view">
        <div className="boxed-view_box">
          <h1 className="title">Página no econtrada</h1>
          <p>Lo sentimos, No hemos podido encontrar la página que buscabas.</p>
          <Link to="/">Regresar</Link>
        </div>
      </div>
    );
  }
}
