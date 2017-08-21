import React from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends React.Component {
  render () {
    return (
      <div>
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
