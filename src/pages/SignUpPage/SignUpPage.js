import React, { useEffect, useState } from 'react';
import { Form, Input, Button, TextArea  } from 'antd';
import uuid from 'uuid';
import Header  from '../../components/Header/Header'
import axios from 'axios';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import {
  Link,
  useHistory
} from "react-router-dom";
import 'antd/dist/antd.css'

const SignUpPage = () => {
  const [form] = Form.useForm()
  const [user, setUser] = useState(true)
  var d = new Date()
  var count = d.getMonth() + d.getSeconds() + d.getMilliseconds() + d.getFullYear()
  let history = useHistory()

  const styleSize = {
    paddingLeft: '47px',
    display: 'flex',
    color: 'black',
    fontSize: '30px',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '9px'
  }

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 5,
    },
  };

  const tailLayoutSignUp = {
    wrapperCol: {
      offset: 12,
      span: 5,
    },
  };

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 5,
    },
  };

  const onFinish = async (values) => {
    console.log('count', count)
    const newData = { ...values }
    console.log('test newdata', newData)
    await axios.post(`http://localhost:5000/customer/add?id=${count}&name=${values.name}&address=${values.address}&phonenumb=${values.phonenum}&email=${values.email}&pass=${values.password}`)
      .then(response => {
        setUser(response.data)
        console.log('test post', response.data)
      })
    if(newData){
      alert('Bạn đã đăng kí thành công tài khoản')
      history.push('/signin')
    }
    else{
      alert('Lỗi đăng kí. Vui lòng thử lại')
    }
    
  }

  const onFinishFailed = (errors) => {
    console.log('unsuccess', errors)
  }




  const submitForm = async () => {
    const payload = await form.getFieldValue()
    console.log('payload Sign Up', payload)

  }

  const validatePhoneNum = (rule, value) => {
    const regex = /[^0-9]/g
    const match = regex.test(value)
    if (match) {
      return Promise.reject('Số điện thoại chỉ được nhập từ 0-9')
    }
    return Promise.resolve()
  }

  const validateEmail = (rule, value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const match = regex.test(value)
    if (!match) {
      return Promise.reject('Phải nhập đúng định dạng Email')
    }
    return Promise.resolve()
  }
  return (
    <>
      <Header title="Sign Up" style={{display:'none'}} styleSize={{height:'50vh',minHeight:'550px'}}/>

      <span style={styleSize}>ĐĂNG KÝ</span>
      <Form
        {...layout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onSubmit={submitForm}
      >
        <Form.Item {...tailLayout}
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { validator: validateEmail },
            { message: 'Phải nhập đúng định dạng Email' }
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Họ tên" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
            },
          ]}
        >
          <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Địa chỉ" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="phonenum"
          rules={[
            { required: true, message: 'Please input your PhoneNumber!' },
            { validator: validatePhoneNum },
            { max: 10, message: 'Chỉ được nhập 10 số' }
          ]}
        >
          <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item {...tailLayoutSignUp}>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={submitForm}>
            Đăng Ký
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpPage;