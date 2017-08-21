import React from 'react';
import PropTypes from 'prop-types';

export default class CartDeck extends React.Component {
  render () {
    return (
      <div className="card-deck container">
        <div className="container">
          <h2 className="display-1 margin-top">Una nueva forma entretenida de aprender</h2>
        </div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    );
  }
}
