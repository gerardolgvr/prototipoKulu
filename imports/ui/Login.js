import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if(err){
        this.setState({error: 'Unable to login. Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });
  }


  render(){
    return (
      <div>
        <h1>Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Contraseña"/>
          <label>Tipo de cuenta: </label>
          <select>
            <option value="seleccione">Seleccione...</option>
            <option value="estudiante">Estudiante</option>
            <option value="maestro">Maestro</option>
          </select>
          <button>Entrar</button>
        </form>


        <Link to="/signup">Ya tienes una cuenta?</Link>


      </div>
    );
  }
}
