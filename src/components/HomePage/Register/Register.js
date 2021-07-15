import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='register'>
      <Form
        name='form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 className='form-title'>Qeydiyyatdan keç</h1>

        <Form.Item
          // label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <label>İstifadəçi adı</label>
          <Input />
        </Form.Item>

        <Form.Item
          // label='Username'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <label>E-poçt</label>
          <Input />
        </Form.Item>

        <Form.Item
          // label='Password'
          name='phone'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <label>Əlaqə nömrəsi</label>
          <Input />
        </Form.Item>

        <Form.Item
          // label='Password'
          name='password1'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <label>Şifrə</label>
          <Input.Password />
        </Form.Item>

        <Form.Item
          // label='Password'
          name='password2'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <label>Təkrar şifrə</label>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            <span className='register-label'>Qeydiyyatdan keç</span>
          </Button>
        </Form.Item>

        <div className='h-line'></div>

        <p className='have-account'>Hesabınız var?</p>
        <div className='to-login'>
          <Link to='/'>Daxil olun</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
