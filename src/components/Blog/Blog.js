import React from 'react';
import ImageRoom from '../../images/img_3.jpg'
import ImageCustomer from '../../images/img_6.jpg'
import ImageNewRoom from '../../images/img_5.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section class="site-section bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 heading-wrap text-center">
            <h4 class="sub-heading">Our Blog</h4>
              <h2 class="heading">Our Recent Blog</h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-4">
            <div class="post-entry">
              <img src={ImageRoom} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Rooms</div>
                <h3 class="mb-3"><a href="#">New Rooms</a></h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={ImageCustomer} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">News</div>
                <h3 class="mb-3"><a href="#">New Staff Added</a></h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={ImageNewRoom} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">New Rooms</div>
                <h3 class="mb-3"><a href="#">Big Rooms for All</a></h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;