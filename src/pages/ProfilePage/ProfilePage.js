import React from 'react';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Form, Input, Button  } from 'antd';
import Header  from '../../components/Header/Header'

const ProfilePage = () => {
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
  const obj=JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header title="Welcome To Our Luxury Rooms"/>
      <span style={styleSize}>Hồ sơ của tôi</span>
      <Form
        {...layout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item {...tailLayout}
          name="email"
          
          rules={[
            { required: true, message: 'Please input your Email!' },
          ]}
        >Email:
          <Input prefix={<MailOutlined className="site-form-item-icon" />} defaultValue={obj.email} disabled />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="ID"
        >ID:
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            defaultValue={obj.id} disabled
          />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="name"
        >Họ và tên:
          <Input prefix={<UserOutlined className="site-form-item-icon" />} defaultValue={obj.name} disabled />
        </Form.Item>



      </Form>
    </>
  );
};

export default ProfilePage;