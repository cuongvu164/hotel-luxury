import React from 'react';
import Background from '../../images/img_5.jpg'

const VideoRoom = () => {
  return (
    <>
      <section className="section-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + Background + ')', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center intro">
            <div className="col-md-9 text-center element-animate fadeInUp element-animated">
              <h2>Relax and Enjoy your Holiday</h2>
              <p className="lead mb-5">Hãy tận hưởng kì nghỉ của bạn. Chúng tôi cam kết đem tới cho bạn một trải nghiệm vô cùng thú vị khi ở Luxury Hotel</p>
              <div className="btn-play-wrap"><a href="https://vimeo.com/channels/staffpicks/93951774" className="btn-play popup-vimeo "><span className="ion-ios-play"></span></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoRoom;