import React from 'react'
import styled from 'styled-components'
import DienThoaiVuiImage from '../assets/dienthoaivui.png'
import CityLogo from '../assets/citilogo.png'
import MocaLogo from '../assets/mocalogo.png'
import RedivoLogo from '../assets/redivologo.png'
import VnPayLogo from '../assets/vnpay.png'
import VpBankLogo from '../assets/vpbank.png'
import { Footer } from 'antd/lib/layout/layout'
type Props = {}
const FooterStyle: React.CSSProperties = {
  padding: '0',
  margin: '0'
}
const HeadingText: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: '400'
}
const ActiveText: React.CSSProperties = {
  color : '#FF0000'
}
const PaymentMethod : React.CSSProperties = {
  fontSize : '16px',
  marginTop : '10px',
  marginBottom : '15px'
}
const Service: React.CSSProperties = {
  fontSize : '16px',
  marginTop : '15px',
  marginBottom:'5px'
}
const AppleService: React.CSSProperties = {
  fontSize : '16px',
  marginTop : '18px',
  marginBottom:'5px'
}
const PaymentStyle: React.CSSProperties = {
  display: 'flex',
 flexWrap: 'wrap',
  paddingRight: '50px',
  marginTop : '-10px',
  marginLeft: '-10px'
}
const WebsiteFooter = (props: Props) => {
  return (
    <Footer style={FooterStyle}>
      <FooterTop>
          <Ul>
            <ListItem style={HeadingText}>Tìm Cửa Hàng</ListItem>
            <ListItem>Tìm cửa hàng gần nhất</ListItem>
            <ListItem>Mua hàng từ xa</ListItem>
            <ListItem style={ActiveText}>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</ListItem>
            <ListItem style={PaymentMethod}>Phương thức thanh toán</ListItem>
            <ListItem style={PaymentStyle}>
              <PaymentMethodLogo src={CityLogo}/>
              <PaymentMethodLogo src={MocaLogo}/>
              <PaymentMethodLogo src={RedivoLogo}/>
              <PaymentMethodLogo src={VnPayLogo}/>
              <PaymentMethodLogo src={VpBankLogo}/>
            </ListItem>
          </Ul>
          <Ul>
            <ListItem>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</ListItem>
            <ListItem>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</ListItem>
            <ListItem>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</ListItem>
             <ListItem style={Service}>Đối tác dịch vụ bảo hành</ListItem>
             <ListItem>Điện Thoại - Máy tính</ListItem>
             <ListItem style={AppleService}>Trung tâm bảo hành uỷ quyền Apple</ListItem>
             <ListItem><DienThoaiVuiImg src={DienThoaiVuiImage}/></ListItem>  
          </Ul>
          <Ul>
            <ListItem>Mua hàng và thanh toán Online</ListItem>
            <ListItem>Mua hàng trả góp Online</ListItem>
            <ListItem>Tra thông tin đơn hàng</ListItem>
            <ListItem>Tra điểm Smember</ListItem>
            <ListItem>Tra thông tin bảo hành</ListItem>
            <ListItem>Tra cứu hoá đơn VAT điện tử</ListItem>
            <ListItem>Trung tâm bảo hành chính hãng</ListItem>
            <ListItem>Quy định về việc sao lưu dữ liệu</ListItem>
            <ListItem style={ActiveText}>Dịch vụ bảo hành điện thoại</ListItem>
          </Ul>
          <Ul>
            <ListItem>Quy chế hoạt động</ListItem>
            <ListItem>Chính sách Bảo hành</ListItem>
            <ListItem>Liên hệ hợp tác kinh doanh</ListItem>
            <ListItem>Liên hệ hợp tác kinh doanh</ListItem>
            <ListItem style={ActiveText}>Ưu đãi thanh toán</ListItem>
            <ListItem>Tuyển dụng</ListItem>
          </Ul>
      </FooterTop>
      <FooterBottom>
        <ListWrap>
        <Ul>
          <ListItem>Điện thoại iPhone 13- Điện thoại iPhone 12- Điện thoại iPhone 11</ListItem>
          <ListItem>Điện thoại iPhone 13 Pro Max- Điện thoại iPhone 11 Pro Max</ListItem>
          <ListItem>iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</ListItem>
        </Ul>
        <Ul>
          <ListItem>Điện thoại iPhone- Điện thoại Samsung- Điện thoại Samsung A</ListItem>
          <ListItem>Điện thoại OPPO- Điện thoại Xiaomi- Điện thoại Vivo-Điện thoại Nokia</ListItem>
          <ListItem>Samsung Fold 3- Samsung S22-Samsung A73- Samsung A53</ListItem>
        </Ul>
        <Ul>
          <ListItem>Laptop- Laptop HP- Laptop Dell- Laptop Acer</ListItem>
          <ListItem>Microsoft Surface- Laptop Lenovo- Laptop Asus</ListItem>
          <ListItem>Máy tính để bàn- Màn hình máy tính- Camera- Camera hành trình</ListItem>
        </Ul>
        </ListWrap>
        <FooterInformations>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</FooterInformations>
      </FooterBottom>
    </Footer>
  )
}
const FooterTop = styled.div`
padding: 0px 102px 0 202px;
display:flex;
margin-left: -40px;
`
const Ul = styled.ul`
flex : 1;
display:block;
`
const ListItem = styled.li`
font-size: 10px;
list-style : none;
margin-bottom: 5px;
`
const FooterBottom = styled.div`
background-color : #F8F8F8;
padding: 15px 102px 0 202px;
`
const ListWrap = styled.div`
display:flex;
margin-left: -40px;
`
const FooterInformations = styled.p`
font-size :10px;
text-align :center;
margin : 0;
padding-bottom : 58px;
`
const PaymentMethodLogo = styled.img`
margin-left :10px;
margin-top:10px;
`
const DienThoaiVuiImg = styled.img`
margin-bottom : 59px
`
export default WebsiteFooter