import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4">
              <h3>Điện Thoại Hỗ Trợ</h3>
              <p>24/7 Gọi cho chúng tôi.</p>
              <p class="lead"><a href="tel://">+84 789 376 769</a></p>
            </div>
            <div class="col-md-4">
              <h3>Mạng Xã Hội</h3>
              <p>Theo dõi chúng tôi tại:</p>
              <p>
                <a href="#" class="pl-0 p-3"><span class="fa fa-facebook"></span></a>
                <a href="#" class="p-3"><span class="fa fa-twitter"></span></a>
                <a href="#" class="p-3"><span class="fa fa-instagram"></span></a>
                <a href="#" class="p-3"><span class="fa fa-vimeo"></span></a>
                <a href="#" class="p-3"><span class="fa fa-youtube-play"></span></a>
              </p>
            </div>
            <div class="col-md-4">
              <h3>Liên hệ với chúng tôi</h3>
              <p>Hãy điền email cần hỗ trợ:</p>
              <form action="#" class="subscribe">
                <div class="form-group">
                  <button type="submit"><span class="ion-ios-arrow-thin-right"></span></button>
                  <input type="email" class="form-control" placeholder="Enter email" />
                </div>

              </form>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-7 text-center">
              &copy;
Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Cường</a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;