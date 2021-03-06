import React from 'react';
import Background from '../../images/f_img_1.png'
import Person1 from '../../images/person1.jpg'
import Person2 from '../../images/person2.jpg'
import Person3 from '../../images/person3.jpg'
import './style.css'
import VideoRoom from '../../components/VideoRoom/VideoRoom'
import Header from '../../components/Header/Header'
// import '../../css/headercss.scss'


const AboutPage = () => {

  return (
    <>
      <Header title="About Luxury Hotel" style={{display:'none'}} styleSize={{height:'50vh',minHeight:'550px'}}/>
      <section class="site-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="heading-wrap element-animate fadeInUp element-animated">
              <h4 class="sub-heading">Stay with our luxury rooms</h4>
              <h2 class="heading">Our Story</h2>
              <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>

            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-7">
            <img src={Background} alt="Image placeholder" class="img-md-fluid"/>
          </div>
        </div>
      </div>
    </section>


   
   
    
    <section class="site-section bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 heading-wrap text-center">
            <h4 class="sub-heading">Our Kind Staff</h4>
              <h2 class="heading">Our Staff</h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-4">
            <div class="post-entry">
              <img src={Person1} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Staff</div>
                <h3 class="mb-3"><a href="#">V?? ?????c C?????ng</a></h3>
                <p class="mb-4">M???t ng?????i qu???n l?? t???t, bi???t quan t??m ?????n nh??n vi??n c???a m??nh. T??? s???: "T??i ???? r???t c??? g???ng ????? ??i ???????c t???i con ???????ng n??y. C???m ??n Luxury Hotel r???t nhi???u, n??i n??y ch??nh l?? ng??i nh?? th??? 2 c???a t??i."</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read Me</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={Person2} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Staff</div>
                <h3 class="mb-3"><a href="#">Nguy???n Ho??ng Minh</a></h3>
                <p class="mb-4">T??i l?? nh??n vi??n si??u tr???m c???m. M???t nh??n vi??n ???????c l??m vi???c trong m??i tr?????ng n??ng ?????ng v?? nhi???u s??ng t???o. C???m ??n Luxury Hotel ???? cho t??i m???t c??ng vi??n t???t. T??i xin ch??n th??nh c???m ??n. </p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read Me</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={Person3} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Cook</div>
                <h3 class="mb-3"><a href="#">Cao V??n Quy???n</a></h3>
                <p class="mb-4">T??i l?? ?????u b???p s??? 1 c???a ????ng Nam ??. T??i ???? t???ng tham gia r???t nhi???u ch????ng tr??nh v??? ???m th???c. N??i v??? ???m th???c th?? n??i t??i l?? s??? 2 th?? kh??ng ai l?? s??? 1 c???. T??i r???t vui khi tr??? th??nh m???t b???p tr?????ng t???i Luxury Hotel</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read Me</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <VideoRoom/>
    </>
  );
};

export default AboutPage;