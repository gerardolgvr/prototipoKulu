import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer-pad">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">K'ulu</a>
          <div className="" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">¿Quiénes Somos? <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Kulu for Business</a>
              <a className="nav-item nav-link" href="#">Afiliados</a>
              <a className="nav-item nav-link" href="#">Contacto</a>
              <a className="nav-item nav-link" href="#">Soporte</a>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}
