import React from 'react';
import { Link } from 'react-router';
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
      <div className="boxed-view">
        <div className="boxed-view_box">
          <h1 className="title">K'ulu</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view_form">
            <input className="form" type="email" ref="email" name="email" placeholder="Email"/>
            <input className="form" type="password" ref="password" name="password" placeholder="Contraseña"/>
            <button>Entrar</button>
          </form>

          <Link to="/signup">Aún no tienes una cuenta?</Link>
        </div>

      </div>
    );
  }
}
