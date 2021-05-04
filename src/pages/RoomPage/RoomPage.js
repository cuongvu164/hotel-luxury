import React,{useEffect,useState} from 'react';
import VideoRoom from '../../components/VideoRoom/VideoRoom'
import axios from 'axios';
import {
  Link,
} from "react-router-dom";
import Header from '../../components/Header/Header'
import bgA from '../../Image/hotel/A.jpg'
import bgB from '../../Image/hotel/B.jpg'
import bgC from '../../Image/hotel/C.jpg'
import bgD from '../../Image/hotel/D.jpg'
import bgE from '../../Image/hotel/E.jpg'
import bgF from '../../Image/hotel/F.jpg'

const RoomPage = () => {
  const [rooms, setRooms] = useState([])

  const fetchAllRoom = async () => {
    await axios.get('http://localhost:5000/lp', {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(response => {
        setRooms(response.data)
        console.log('Loai Phong',response.data)
        console.log('Loai Phong',response.data.$values)
      })
  }

  useEffect(() =>{
    fetchAllRoom()
    console.log('user',rooms)
  }, [])

  return (
    <>
    {/* <img src={bgF}/> */}
    <Header title="Our Rooms" style={{display:'none'}} styleSize={{height:'50vh',minHeight:'550px'}}/>
      <section class="site-section">
        <div class="container">
          <div class="row">
            {
              rooms.map(room => {
              return(
              <div class="col-md-4 mb-4">
                <div class="media d-block room mb-0">
                  <figure>
                    <img src={room.HinhAnh} alt="Generic placeholder image" class="img-fluid"/>
                    {/* item.anh */}
                    <div class="overlap-text">
                      <span>
                        Featured Room
                        <span class="ion-ios-star"></span>
                        <span class="ion-ios-star"></span>
                        <span class="ion-ios-star"></span>
                      </span>
                    </div>
                  </figure>
                  <div class="media-body">
                    <h3 class="mt-0"><a href="#">{room.LoaiPhong}</a></h3>           {/* room.LoaiPhong */}
                    <ul class="room-specs">
                      <li><span class="ion-ios-people-outline"></span>{room.SoNguoi + ' Người'}</li>  {/* item.thongtinphong */}
                      <li><span class="ion-ios-crop"></span>{room.DienTich}</li>  {/* item.dientich*/}
                    </ul>
                    <p>{room.MoTa} </p>
                    <p><Link to="/booknow" class="btn btn-primary btn-sm">Đặt ngay {room.DonGia}$</Link></p>  {/* item.giaphong */}
                  </div>
                </div>
              </div>
              )
             })
            }
        </div>
      </div>
    </section>
    <VideoRoom/>
    </>
  );
};

export default RoomPage;