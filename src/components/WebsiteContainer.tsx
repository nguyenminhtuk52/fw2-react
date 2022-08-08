import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getAll } from "../api/product";

type Props = {
  productCates : any
};

const WebsiteContainer = (props: Props) => {
  const [products,setProducts]:any = useState([])
  if(props.productCates){
    setProducts(props.productCates.products)  
  }
  else{
    useEffect(()=>{
      const getProducts = async () =>{
        try {
          const {data} = await getAll()
         setProducts(data)
        } catch (error) {
          message.error('Something went wrong')
        }
      }
      getProducts()
    },[])
  }
  return (
    <ContainerStyle>
      <Heading3>Điện thoại nổi bật nhất</Heading3>
      <Grid>
       {products.map((item:any) => {
         return (
          <Product key={item.id}>
          <ProductImg src="https://i.picsum.photos/id/945/160/160.jpg?hmac=pEL1S7u7Azmfa0Noc3PRdZkN2uToyuNuXEYADQdsRCQ" alt="" />
          <ProductName><Link  to={`/product-detail/${item.id}`}>{item.name}</Link></ProductName>
          <Price>{item.saleOffPrice}đ<OriginalPrice>{item.originalPrice}đ</OriginalPrice></Price>
          </Product>
         )
       })}
      </Grid>
    </ContainerStyle>
  );
};
const Heading3 = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding-left:130px;
`;
const Grid = styled.div`
display : grid ;
grid-template-columns : 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`
const ContainerStyle = styled.div`
padding : 0 104px 0 58px;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
`
const ProductImg = styled.img`
`
const Price = styled.div`
margin-top : 10px;
color : red;
font-size : 16px;
display: inline-block
`
const OriginalPrice = styled.span`
color : black;
font-size : 13px;
margin-left : 15px;
`
const ProductName = styled.span`
display :block;
margin-top : 10px;
`
export default WebsiteContainer;