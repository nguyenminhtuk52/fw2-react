import { Input } from 'antd'

import React from 'react'
import styled from 'styled-components'
import LogoWebSite from '../assets/anhhtus-logo 2.png'
import LookUpImage from '../assets/lookup.png'
import Tracking from '../assets/tracking.png'
import CartImage from '../assets/cart.png'
import { Header } from 'antd/lib/layout/layout'
type Props = {}
const HeaderStyle: React.CSSProperties = {
  backgroundColor : '#D70018',
  padding : '4px 102px 4px 202px',
 display : 'flex',
 lineHeight: '1.5715'
};
const InputStyle: React.CSSProperties ={
  width : '533px',
  height : '34px',
  margin: 'auto 0',
  lineHeight: '57px',
  marginRight:'47px',
  borderRadius :" 6px",
  border: 'none'
}
const WebsiteHeader = (props: Props) => {
  return (
    <Header style={HeaderStyle}>
     <Logo src={LogoWebSite}/>
      <>
      <Input style={InputStyle}/>
      </>
        <Nav>
        <Contact>
          <ContactBtn>Gọi mua hàng</ContactBtn>
          <PhoneNumber>1800.2097</PhoneNumber>
        </Contact>
        <NearStore>
          <NearStoreImg src={LookUpImage}/>
          <NearStoreLink>Cửa hàng <br /> gần bạn</NearStoreLink>
        </NearStore>
        <LookUp>
          <LookUpImg src={Tracking}/>
          <LookUpLink>Tra cứu <br /> đơn hàng</LookUpLink>
        </LookUp>
          <Cart>
            <CartImg src={CartImage}/>
            <CartLink>Giỏ <br /> Hàng</CartLink>
          </Cart>
        </Nav>
    </Header>
  )
}
const Logo = styled.img`
width: 65px;
height:57px;
margin-right:115px;
`
const ContactBtn = styled.span`
font-size: 12px;
font-weight:400;
color: #ffff;
display:block;
`
const Nav = styled.div`
padding : 8px 0;
display: flex;
font-size: 12px;
font-weight:400;
color: #ffff;
`
const PhoneNumber = styled.span`
display:block;
`
const NearStoreImg = styled.img`
margin:8px 4px;
margin-right: 8.5px;
width:17.5px;
height:23.5px;
`
const NearStoreLink = styled.a`
color: #ffff;
`
const Contact = styled.div`
margin-right: 17px
`
const NearStore = styled.div`
display:flex;
margin-right:13px;
`
const LookUp = styled.div`
margin-right:17px;
display:flex;
`
const LookUpImg = styled.img`
margin:8px 4px;
width : 41px;
height: 24px;
`
const LookUpLink = styled.a`
color: #ffff;
`
const Cart = styled.div`
display :flex;
`
const CartImg = styled.img`
width : 25px;
height:25px;
margin : 8px 4px;
`
const CartLink = styled.a`
color: #ffff;
`
export default WebsiteHeader