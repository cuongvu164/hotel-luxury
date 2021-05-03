import React from 'react';
import Intro1 from '../../images/f_img_1.png'

const Intro = () => {
  return (
    <>
      <section className="site-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="heading-wrap text-center element-animate fadeInUp element-animated">
              <h4 className="sub-heading">Stay with our luxury rooms</h4>
              <h2 className="heading">Stay and Enjoy</h2>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
              <p><a href="#" className="btn btn-primary btn-sm">More About Us</a></p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <img src={Intro1} alt="Image placeholder" className="img-md-fluid"/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Intro;