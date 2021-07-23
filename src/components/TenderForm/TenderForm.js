import React from 'react';
import { Form, Input, Button, DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';
import './TenderForm.scss';

const TenderForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { RangePicker } = DatePicker;

  return (
    <>
      <div className='tender-form'>
        <Form
          name='form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1 className='form-title'>Tender yarat</h1>

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
            name='phone'
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <label>Əlaqə nömrəsi</label>
            <Input />
          </Form.Item>

          <Form.Item
            name='title'
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <label>Tender başlığı</label>
            <Input />
          </Form.Item>

          <Form.Item
            name='deadline'
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <label>Son muraciet tarixi</label>
            <Input />
          </Form.Item>

          <Form.Item
            name='deadline'
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <label>Muraciet tarixi</label>
            <RangePicker showTime />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              <span className='register-label'>Dərc et</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default TenderForm;
