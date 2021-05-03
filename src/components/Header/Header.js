import React from 'react';
import Background from '../../images/big_image_1.jpg'
import {
  Link
} from "react-router-dom";
import HOCContext from '../MyHOC/HOCContext'

const Header = (props) => {
  return (
    <HOCContext.Consumer>
      {(globalContextValue) => (
        <section className="site-hero overlay" data-stellar-background-ratio="0.5" style={props.styleSize}>
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center" style={props.styleSize}>
            <div className="col-md-12 text-center">
              <div className="mb-5 elment-animate fadeInUp element-animated">
                {/* <h1>Welcome To Our Luxury Rooms</h1> */}
                <h1>{props.title}</h1>
                <p>Discover our world's #1 Luxury Room For VIP.</p>
                <p style={props.style}><Link to="/booknow" className="btn btn-primary">Book Now</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </HOCContext.Consumer>
  );
};

export default Header;