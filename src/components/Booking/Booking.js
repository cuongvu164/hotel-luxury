import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { DatePicker, Space } from 'antd';
import { Form, Input, Button, Checkbox, Row, Col, Divider, Select, TextArea } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import {
  Link,
  useHistory
} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/zh-cn';
const Booking = () => {
  const [form] = Form.useForm()

  const styles = {
    width: '330px',
  }

  var d = new Date()
  var count = d.getMonth() + d.getSeconds() + d.getMilliseconds() + d.getFullYear()
  let history = useHistory()

  const [roomTypes, setRoomTypes] = useState([])
  const [bookings, setBookings] = useState([])
  const { RangePicker } = DatePicker;

  const fetchRoomTypes = async () => {
    await axios.get('http://localhost:5000/lp')
      .then(response => {
        setRoomTypes(response.data)
      })
  }

  const onChange = e => {

  }
  const dateFormat = 'DD/MM/YYYY'

  const submitForm = async () => {
    const payload = await form.getFieldsValue()
    console.log('payload', payload.date[0]._d.getDate())
  }

  const onFinish = async (values) => {
    const newData = { ...values }
    console.log('newdata',newData)
    await axios.post(`http://localhost:5000/order/add?id=${count}&email=${values.email}&note=${values.note}&dayin=${values.date[0]._d.getMonth()}/${values.date[0]._d.getDay()}/${values.date[0]._d.getFullYear()}&dayout=${values.date[1]._d.getMonth()}/${values.date[1]._d.getUTCDay()}/${values.date[1]._d.getFullYear()}`)
      .then(response => {
        console.log('test post', response.data)
        if(response.data){
          alert('Đã đặt được phòng')
        } else {
          alert('Chưa đặt được phòng')
        }
      })
    history.push('/')
  }

  useEffect(() => {
    fetchRoomTypes()
  }, [])
  const { TextArea } = Input;
  return (
    <>

      <section class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="mb-5">Reservation Form</h2>
              {/* <form action="#" method="post">
                <div class="row">
                  <div class="col-sm-6 form-group">

                    <label for="">Arrival Date</label>
                    <div style={{position: 'relative'}}>
                      <span class="fa fa-calendar icon"
                        style={{position: 'absolute', right: '10px', top: '10px'}}></span>
                      <input type='text' class="form-control" id='arrival_date' />
                    </div>
                  </div> 
                     

                  <div class="col-sm-6 form-group">

                    <label for="">Departure Date</label>
                    <div style={{position: 'relative'}}>
                      <span class="fa fa-calendar icon"
                        style={{position: 'absolute', right: '10px', top: '10px'}}></span>
                      <input type='text' class="form-control" id='departure_date' />
                    </div>
                  </div>

                </div>


                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="room">Loại Phòng</label>
                    <select name="" id="room" class="form-control">
                      {
                        roomTypes.map(roomType => {
                          return <option value={roomType.LoaiPhong}>
                            {roomType.LoaiPhong}
                          </option>
                        })
                      }
                    </select>
                  </div>

                  <div class="col-md-6 form-group">
                    <label for="room">Số Lượng</label>
                    <select name="" id="room" class="form-control">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control " />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label for="message">Write a Note</label>
                    <textarea name="message" id="message" class="form-control " cols="30"
                      rows="8"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="submit" value="Đặt Phòng Ngay" class="btn btn-primary" />
                  </div>
                </div>
              </form> */}

              <Form form={form} name="control-hooks" onFinish={onFinish} onSubmit={submitForm}>

                <Form.Item label="Ngày nhận và trả" name ="date">
                  <RangePicker format={dateFormat} defaultValue={moment('01-01-2021','DD-MM-YYYY')} style={styles}/>
                </Form.Item>

                <Form.Item
                  name="roomtype"
                  label="Loại Phòng"
                  rules={[
                    { required: true, message: 'Hãy chọn 1 Loại' }
                  ]}
                >
                  <Select style={styles}>
                    {
                      roomTypes.map((roomType, index) => {
                        return <Select.Option 
                          value={roomType.LoaiPhong}>
                          {roomType.LoaiPhong}
                        </Select.Option>
                      })
                    }
                  </Select>
                </Form.Item>

                <Form.Item 
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your Email!' },
                    // { validator: validateEmail },
                    // { message: 'Phải nhập đúng định dạng Email' }
                  ]}
                >
                  <Input style={styles}/>
                </Form.Item>

                <Form.Item 
                  name="note"
                  label="Ghi Chú"
                  
                >
                  <TextArea rows={4} style={styles}/>
                </Form.Item>



                <Button type="primary" onClick={submitForm}  htmlType="submit">Submit</Button>
              </Form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;