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
                <h3 class="mb-3"><a href="#">Vũ Đức Cường</a></h3>
                <p class="mb-4">Một người quản lí tốt, biết quan tâm đến nhân viên của mình. Tự sự: "Tôi đã rất cố gắng để đi được tới con đường này. Cảm ơn Luxury Hotel rất nhiều, nơi này chính là ngôi nhà thứ 2 của tôi."</p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read Me</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={Person2} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Staff</div>
                <h3 class="mb-3"><a href="#">Nguyễn Hoàng Minh</a></h3>
                <p class="mb-4">Tôi là nhân viên siêu trầm cảm. Một nhân viên được làm việc trong môi trường năng động và nhiều sáng tạo. Cảm ơn Luxury Hotel đã cho tôi một công viên tốt. Tôi xin chân thành cảm ơn. </p>
                <p><a href="#" class="btn btn-primary btn-outline-primary btn-sm">Read Me</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <img src={Person3} alt="Image placeholder" class="img-fluid"/>
              <div class="body-text">
                <div class="category">Cook</div>
                <h3 class="mb-3"><a href="#">Cao Văn Quyền</a></h3>
                <p class="mb-4">Tôi là đầu bếp số 1 của Đông Nam Á. Tôi đã từng tham gia rất nhiều chương trình về ẩm thực. Nói về ẩm thực thì nói tôi là số 2 thì không ai là số 1 cả. Tôi rất vui khi trở thành một bếp trưởng tại Luxury Hotel</p>
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