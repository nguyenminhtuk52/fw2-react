import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Input from 'rc-input'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
type Props = {}
const HeaderStyle: React.CSSProperties = {
  backgroundColor: '#00B0D7',
  display: 'flex',
  lineHeight: '1.5715',
  justifyContent: 'space-between',
  padding: '3px 86px 4px 24px',

}
const InputStyle: React.CSSProperties = {
  width: '533px',
  height: '34px',
  margin: 'auto 0',
  lineHeight: '57px',
  marginRight: '10px',
  borderRadius: "6px",
  border: 'none',
  marginLeft: '240px',

}
const LinkStyle = {
  color: '#FFFFFF',
  fontSize: '16px',
  paddingTop: '15px',
  lineHeight: '50px'
}
const dash = {
  color: '#FFFFFF',
  marginRight: '47px',
}
const AdminHeader = (props: Props) => {
  return (
    <Header style={HeaderStyle}>
      <Wrap>
        <Logo src="" />
        <Heading style={dash}>Dashboard</Heading>
        <>
          <Input style={InputStyle} />
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
          </Tooltip>
        </>
      </Wrap>
      <Wrap>
        <Link to='/admin' style={LinkStyle}>Xin chào Nguyen Minh Tu</Link>
      </Wrap>
    </Header>
  )
}
const Logo = styled.img`
width: 65px;
height:57px;
margin-right:115px;
`
const Wrap = styled.div``
const Heading = styled.a`
`
export default AdminHeader