import React from 'react';
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Room from './Room/Room'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'

import '../css/bootstrap.css'
import '../css/animate.css'
import '../css/style.css'
import '../fonts/ionicons/css/ionicons.min.css'
import '../fonts/fontawesome/css/font-awesome.min.css'
// import '../css/owl.carousel.min.css'



const Components = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Room />
      <Blog />
      <Footer/>

    </>
  );
};

export default Components;