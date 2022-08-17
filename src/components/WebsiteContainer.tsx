import { StarOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { getAll, filterPro, filterProduct } from "../api/product";

type Props = {
  productCates: any
};

const WebsiteContainer = (props: Props) => {
  const [products, setProducts]: any = useState([]);
  const { id } = useParams();
    useEffect(() => {
      const getProducts = async () => {
        if (id) {
          try {
            const { data } = await filterProduct(id);
            setProducts(data);
          } catch (error) {
            message.error('Có lỗi xảy ra!')
          }
        } else {
          try {
            const { data } = await getAll()
            setProducts(data)
          } catch (error) {
            message.error('Có lỗi xảy ra!')
          }
        }
      }
      getProducts()
    }, [id])
  return (
    <ContainerStyle>
      <Heading3>Điện thoại nổi bật nhất</Heading3>
      <Grid>
        {products.map((item: any) => {
          return (
            <Product key={item.id}>
              <Link to={`/${item.id}/detail`}><ProductImg src={item.image} alt="" /></Link>
              <ProductName><Link to={`/${item.id}/detail`}>{item.name}</Link></ProductName>
              <Price>{item.saleOffPrice}đ<OriginalPrice>{item.originalPrice}đ</OriginalPrice></Price>
              <br />
              <Description>{item.feature}</Description>
              <p><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /> Đánh Giá</p>
            </Product>
          )
        })}
      </Grid>
      <Content>
        <Content1>
          <Text>
          <Heading3>Phụ kiện</Heading3>
          <a style={{marginLeft:'780px'}}>Xem Tất Cả</a>
          </Text>
          <Content1 className="flex flex-wrap space-x-3">
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/a/balo-laptop-lenovo-backpack-kr3907-15-6-inch3.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/p/apple-airpods-max_1.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/6/16_3_1.png" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/w/e/webcam-rapoo-c200-hd-720p-1_.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/m/i/microsoft-surface-pen.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/i/gia-do-laptop-macbook-s-case-hop-kim-nhom-1.png" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/_/1_13_67_1.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/a/cap-type-c-to-lightning-apple-mm0a3fe-a-1m_1.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/a/tam-lot-chuot-rapoo-v1-30-25cm-1.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/j/b/jbl_quantum_200_product_image_side_hero_mic_up_1.png" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/j/b/jbl_quantum_400_product_image_angle_1.png" alt="" />
          </Content1>
        </Content1>
        <Content1>
          <br /><br />
          <Text>
          <Heading3>Linh kiện máy tính</Heading3>
          <a style={{marginLeft:'700px'}}>Xem Tất Cả</a>
          </Text>
          <Content1 className="flex flex-wrap space-x-7">
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/a/day-deo-airtag-apple-loop-1.jpeg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/a/day-deo-airtag-wiwu-silicone-4-in-1-pack-2.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/a/camera-ip-hikvision-ds-2cd2121g0-i-2mp-00.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/_/1_71_13.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/_/1_74_37.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/_/1_15_14_1_1_1.jpg" alt="" />
            <ProductImg1 src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/j/dji-osmo-5_01-768x768_1.jpg" alt="" />
          </Content1>
        </Content1>
      </Content>
    </ContainerStyle>
  );
};
const Heading3 = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding-left:13 0px;
`
const Grid = styled.div`
display : grid ;
grid-template-columns : 1fr 1fr 1fr 1fr 1fr 1fr ;
gap: 30px;
margin-left: 10px;
`
const Content = styled.div`
  padding: 0px 200px 80px 200px;
  margin-top : 50px;
`
const Content1 = styled.div`
margin-left: 0 20px;
`
const ContainerStyle = styled.div`
padding : 0 100px;
background-color white;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
`
const ProductImg = styled.img`
width:160px;
height : 160px;
border-radius: 5px;
margin : 3px;
`
const ProductImg1 = styled.img`
width : 111px;
height : 125px;
border: 1px solid #ccc;
border-radius: 5px;
margin : 3px;
`
const Price = styled.div`
margin-top : 10px;
color : red;
font-size : 16px;
display: inline-block;
`
const Description = styled.p`
margin-top : 10px;
color : black;
font-size : 16px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis
`
const OriginalPrice = styled.span`
color : black;
font-size : 13px;
margin-left : 15px;
text-decoration: line-through;
`
const ProductName = styled.span`
display :block;
margin-top : 10px;
`
const Text = styled.div`
display :flex;
`
export default WebsiteContainer;