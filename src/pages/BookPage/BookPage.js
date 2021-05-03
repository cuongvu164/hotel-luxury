import React from 'react';
// import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import VideoRoom from '../../components/VideoRoom/VideoRoom'
import Booking from '../../components/Booking/Booking'


const BookPage = () => {
  return (
    <>
      <Header title="Reservation" styleSize={{height:'50vh',minHeight:'550px'}}/>
      <Booking/>
      <VideoRoom/>
    </>
  );
};

export default BookPage;