import { StarOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { getAll, filterPro } from "../api/product";

type Props = {
  productCates: any
};

const WebsiteContainer = (props: Props) => {
  ;
  const [products, setProducts]: any = useState([]);
  const { id } = useParams();
  if (props.productCates) {
    setProducts(props.productCates.products)
  }
  else {
    useEffect(() => {
      const getProducts = async () => {
        if (id) {
          try {
            const { data } = await filterPro(id)
            console.log(data);

            setProducts(data)
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
  }
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
          <Heading3>Phụ kiện</Heading3>
          <Content1>
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
          </Content1>
        </Content1>
        <Content1>
          <br /><br />
          <Heading3>Linh kiện máy tính</Heading3>
          <Content1>
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
            <ProductImg1 src="https://picsum.photos/200/300.jpg" alt="" />
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
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
`
const ProductImg = styled.img`
width:160px;
height : 160px;
border: 1px solid #ccc;
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
export default WebsiteContainer;