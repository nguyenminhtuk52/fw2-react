import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import WebsiteSider from './WebsiteSider'
import BannerImg from '../assets/banner.png'
import WebsiteContainer from './WebsiteContainer'
type Props = {}

const WebsiteMain = (props: Props) => {
  const [cateEmbed,setCatesEmbed] = useState([])
const onSendCates = (data:any) =>{
  setCatesEmbed(data)
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
const Main = styled.div`
height:300px;
width:100%
`
const Banner = styled.img`
max-width: 1000px;
height : 382px;
margin-left: 40px;
`
const Section = styled.div`
display : flex;
padding : 10px 20px 0 200px;
margin-bottom : 52px;
`

export default WebsiteMain