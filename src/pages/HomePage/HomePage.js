import React from 'react';
// import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Room from '../../components/Room/Room'
import Blog from '../../components/Blog/Blog'
import Intro from '../../components/Intro/Intro'
// import Footer from '../../components/Footer/Footer'
import HOCContext from '../../components/MyHOC/HOCContext'



const HomePage = () => {
  // localStorage.setItem('user', JSON.stringify({id:null,name:null,email:null,status:false}))

  return (
    <>
      <Header title="Welcome To Our Luxury Rooms"/>
      <Intro/>
      <Room />
      <Blog />      
    </>
  );
};

export default HomePage;