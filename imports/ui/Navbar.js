import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';

export default class Navbar extends React.Component {
  onSubmit(e){
    e.preventDefault();

    login = new Login();
  }
  render () {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand col-2" href="#">K'ulu</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-11">
              <div className="col-10">
                <form className="form-inline">
                  <input className="form-control col-8" type="text" placeholder="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
              <div className="row justify-content-end">
                <div className="col-4">
                  <li className="nav-item">
                    <form className="form-inline" onSubmit={this.onSubmit.bind(this)} noValidate>
                      <a className="nav-link" href="#">Entrar</a>
                    </form>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Registrarse</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
