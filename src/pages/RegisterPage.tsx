import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/user';

type SignUpProps = {
  //   onSignup : (user: any) => void
}

const RegisterPage = (props: SignUpProps) => {
  const navigate = useNavigate()
  return (
    <div style={{ margin: "30px auto" }}>
      <Form
        name="normal_login"
        className="login-form"
        style={{ width: "300px" }}

        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          label='Email Address'
          labelCol={{ span: 24 }}

          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          name="phone"
          label='Phone Number'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Số Diện Thoại" />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          name="password"
          label='Password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật Khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }} className="login-form-button">
            Đăng Ký
          </Button><span style={{ marginTop: "10px" }}>Bạn Đã Có Tài Khoản ?  </span>
          <br /><Link to="/login" className="">Đăng Nhập Ngay !</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterPage