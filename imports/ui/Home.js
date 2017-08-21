import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import CartDeck from './CartDeck';

export default class Home extends React.Component {
  render () {
    return (
    	<div>
        <Navbar/>
        <Carousel/>
        <CartDeck/>
        <Footer/>
      </div>
    );
  }
}

Home.propTypes = {

}
