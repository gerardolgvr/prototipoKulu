import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  render () {
    return (
    	<div>
      	<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </nav>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active img">
              <img className="d-block img-fluid" src="/images/2.jpg" alt="First slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h3>lor dsfjsd jnafn</h3>
                <p>djbdfsjbjdfsnjbdfsjbdsbhjdfsbhjsfhjbshjfsjsf</p>
              </div>
            </div>
            <div className="carousel-item img">
              <img className="d-block img-fluid" src="/images/2.jpg" alt="Second slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h3>lor dsfjsd jnafn</h3>
                <p>djbdfsjbjdfsnjbdfsjbdsbhjdfsbhjsfhjbshjfsjsf</p>
              </div>
            </div>
            <div className="carousel-item img">
              <img className="d-block img-fluid" src="/images/3.jpg" alt="Third slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h3>lor dsfjsd jnafn</h3>
                <p>djbdfsjbjdfsnjbdfsjbdsbhjdfsbhjsfhjbshjfsjsf</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>




      </div>
    );
  }
}

Home.propTypes = {

}
