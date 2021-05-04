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
    textAlign: 'center'
  }

  const styleLayout = {
    display: 'grid',
    gridTemplateColumns: '130px 300px'
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
    const type=newData.roomtype
    // console.log(newData.roomtype)
    await axios.post(`http://localhost:5000/order/add?id=${count}&email=${values.email}&note=${values.note}&dayin=${values.date[0]._d.getMonth()}/${values.date[0]._d.getDay()}/${values.date[0]._d.getFullYear()}&dayout=${values.date[1]._d.getMonth()}/${values.date[1]._d.getUTCDay()}/${values.date[1]._d.getFullYear()}`)
      .then(response => {
        console.log('test post', response.data)
        if(response.data){
          alert('Đã đặt được phòng')
        } else {
          alert('Chưa đặt được phòng')
        }
      })
      await axios.post(`http://localhost:5000/order/detail/add?id=${count}&type=${type}`)
      .then(response => {
        console.log('test post', response.data)
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
              <Form form={form} name="control-hooks" onFinish={onFinish} onSubmit={submitForm} style={styles}>

                <Form.Item label="Ngày nhận và trả" name ="date" style={styleLayout}>
                  <RangePicker format={dateFormat} defaultValue={moment('01-01-2021','DD-MM-YYYY')}/>
                </Form.Item>

                <Form.Item
                  name="roomtype"
                  label="Loại Phòng"
                  rules={[
                    { required: true, message: 'Hãy chọn 1 Loại' }
                  ]}
                  style={styleLayout}
                >
                  <Select>
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
                  style={styleLayout}
                >
                  <Input/>
                </Form.Item>

                <Form.Item 
                  name="note"
                  label="Ghi Chú"
                  style={styleLayout}
                >
                  <TextArea rows={4} />
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