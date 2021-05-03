import React,{useState,useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  Link,
  useHistory
} from "react-router-dom";
import 'antd/dist/antd.css'
import axios from 'axios';
import Header from '../../components/Header/Header'

import { useSelector, useDispatch } from 'react-redux'
import { setUser as setUserStore } from './../../redux/reducers/user'

const SignInPage = () => {
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

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 5,
    },
  };
  const [user,setUser] = useState([]);
  const loggedInUser = useSelector(store => store.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('----loggedInUser:', loggedInUser)
  }, [loggedInUser])

  const onFinish = async (values) => {
    console.log('values', values)
    await axios.post(`http://localhost:5000/account/signin?email=${values.email}&password=${values.password}`, {
      ...values
    })
      .then(response => {
        console.log('data',response.data)
        setUser(response.data)
        if(response.data.length > 0){
          dispatch(setUserStore({
            id:response.data[0].MaKH,
            name: response.data[0].TenKH,
            email: values.email,
            status: true
          }))
          alert('Đăng nhập thành công')
          history.push('/')
        }else{
          alert('Sai tên đăng nhập hoặc mật khẩu')
        }
        
      })

      
      // if (user) {
      //   console.log('ban da dang nhap thanh cong')
      // }
      // else{
      //   console.log('non')
      // }
  }

  // useEffect(()=>{
  //   setUser();
  // },[])

  const onFinishFailed = (errors) => {
    console.log('unsuccess', errors)
  }
  return (
    <>
    <Header title="Sign In" style={{display:'none'}} styleSize={{height:'50vh',minHeight:'550px'}}/>
    <span style={styleSize}>ĐĂNG NHẬP</span>
      <Form
        {...layout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item {...tailLayout}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        <Form.Item {...tailLayout}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng Nhập
        </Button>
        Hoặc <Link to="/signup">Đăng Ký Ngay</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignInPage;