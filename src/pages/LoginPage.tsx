import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import LogoWebSite from '../assets/anhhtus-logo 2.png'
import { login } from '../api/user';
type Props = {

}

const LoginPage = (props: Props) => {
  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    const { data: user } = await login(data)
    localStorage.setItem('user', JSON.stringify(user))
    alert("Dang nhap thanh cong !");
    navigate("/admin")
  }
  return (
    <>
      <Cotainer>
        <Form1>
          <Form
            name="normal_login"
            onFinish={onSubmit}
            className="login-form"
            style={{ width: "300px" }}

            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              label='Email Address'
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: 'Please input your password!' }]}

            >
              <Input.Password className="mt-3"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Mật Khẩu"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%", marginBottom: "20px" }} className=" mt-3 login-form-button">
                Đăng Nhập
              </Button>
              <br />
              <span style={{ paddingTop: "20px", marginLeft: "70px " }}>Hoặc Đăng Nhập Bằng </span>
              <br /><Link to="" className="" style={{ marginLeft: "87px" }}> <img src="https://img.icons8.com/color/2x/facebook-new.png" alt="" width={'50px'} />
                <img src="https://img.icons8.com/color/2x/google-logo.png" alt="" width={'45px'} style={{ marginLeft: "30px" }} />
              </Link>
            </Form.Item>
          </Form>
        </Form1>
        <Image>
          <Link to='/'><Logo src={LogoWebSite} /></Link>
        </Image>
      </Cotainer>
    </>

  )
}
const Cotainer = styled.div`
display: flex;
max-width:700px;
max-height:900px;
gap:80px;
background-color:#F8F8F8;
margin:100px auto;
border-radius:15px

`;
const Image = styled.div`

`;
const Logo = styled.img`
margin-top : 80px;

`
const Form1 = styled.div`
margin-left:30px;
margin-top:40px
`
export default LoginPage