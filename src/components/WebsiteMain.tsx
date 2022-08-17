import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import WebsiteSider from './WebsiteSider'
import BannerImg from '../assets/banner.png'
import WebsiteContainer from './WebsiteContainer'
type Props = {}

const WebsiteMain = (props: Props) => {
const onSendCates = (data:any) =>{
} 
  return (
    <Content>
     <Section>
      <WebsiteSider />
      <Banner src={BannerImg}/>
     </Section>
     <WebsiteContainer/>
    </Content>
  )
}
//Example Main
const Banner = styled.img`
max-width: 1000px;
height : 382px;
margin-left: 40px;
`
const Section = styled.div`
display : flex;
padding : 10px 20px 0 200px;
padding-bottom : 52px;
background-color :white;
`

export default WebsiteMain