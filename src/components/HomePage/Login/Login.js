import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.scss';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <Form
        name='form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
          // label='Password'
          name='password'
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
          name='remember'
          valuePropName='checked'
          className='check-forget'
        >
          <Checkbox>
            <span className='checkbox-label'>Yadda saxla</span>
          </Checkbox>
          <label className='forget-label'>Şifrəni unutdun?</label>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            <span className='login-label'>Daxil ol</span>
          </Button>
        </Form.Item>

        <div className='h-line'></div>

        <Form.Item className='register-btn__wrapper'>
          <Button type='primary' htmlType='submit' className='register-btn'>
            <span className='register-label'>Qeydiyyat</span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
