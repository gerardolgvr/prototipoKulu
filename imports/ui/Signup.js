import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Accounts } from 'meteor/accounts-base'


export default class Signup extends React.Component {
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
    let type = this.refs.type.value.trim();

    if(password.length < 9){
      return this.setState({error: 'Las contraseñas deben tener mas de 8 caracteres'});
    }
    if(type == "seleccione"){
      return this.setState({error: 'Seleccione un tipo de cuenta válido'});
    }

    /*
    Accounts.createUser({email, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });*/


  }

  render(){
    return (
      <div>
        <h1>Únete a K'ulu</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <label>Tipo de cuenta: </label>
          <select ref="type">
            <option value="seleccione">Seleccione...</option>
            <option value="estudiante">Estudiante</option>
            <option value="maestro">Maestro</option>
          </select>
          <button>Crear Cuenta</button>
        </form>

        <Link to="/login">Ya tienes una cuenta?</Link>
      </div>
    );
  }
}
