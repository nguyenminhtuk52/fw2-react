import { ShoppingCartOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { filterPro, read } from '../api/product'
import { ProductType } from '../types/productType'
type Props = {}

const WebsiteDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<any>();
    const [products, setProducts] = useState<any[]>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            const { data: items } = await filterPro(data.category);
            setProducts(items);
            setProduct(data);
        }
        getProduct();
    }, [id])
    if (product) {
        return (
            <Content>
                <Breadcrumb style={{ marginLeft: '200px', marginTop: '20px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">Product</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">Product Deltail</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                <Content1>
                    <Content11>
                        <Content1_img>
                            <ProductImg src={product.image} alt="" />
                        </Content1_img>
                        <Content1_detail>
                            <Heading3>{product.name}</Heading3>
                            <Heading2>{product.originalPrice}đ</Heading2>
                            <Heading5>{product.saleOffPrice}đ</Heading5>

                            <HeadingP>{product.description}</HeadingP>
                            <Content11>
                                <Button className="btn">Mua ngay</Button>
                                <Button1 className="btn"><ShoppingCartOutlined style={{ width: '100px' }} /></Button1>
                                <p style={{ marginTop: '95px', width: '80px' }}>Thêm vào giỏ hàng</p>
                            </Content11>
                        </Content1_detail>
                    </Content11>
                </Content1>
                <Content1 style={{ marginTop: '10px', borderTop: '1px solid black' }}>
                    <HeadingP>Sản phẩm cùng loại</HeadingP>
                    <Content2>
                        {products?.map(item => {
                            return (
                                <Product key={item.id}>
                                    <ProductImg1 src={item.image} alt="" />
                                    <ProductName><Link to={`/product-detail/`}>{item.name}</Link></ProductName>
                                    <Price>{item.saleOffPrice} đ<OriginalPrice>{item.originalPrice}đ</OriginalPrice></Price>
                                </Product>
                            )

                        })}

                    </Content2>
                </Content1>

            </Content>
        )
    }
}
//Example Main
const Heading3 = styled.h3`
  color: black;
  font-size: 25px;
  font-weight: bold;
`
const Heading2 = styled.h2`
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-decoration: line-through;    
  color : black;
`
const Heading5 = styled.h2`
  color: red;
  font-size: 20px;
  font-weight: bold;   
  color : red;
`
const HeadingP = styled.p`
  color: black;
  font-size: 18px;
`
const Button = styled.button`
  color: white;
  font-size: 12px;
  border-radius:5px;
  padding:10px 60px;
  margin:100px 10px;
  background-color:#FF3945;
  border:1px solid #FF3945;
`
const Button1 = styled.button`
  color: red;
  font-size: 13px;
  border:2px solid red;
  border-radius:5px;
  padding:10px 3px;
  margin:100px 10px;
  
`
const Menu = styled.ul`
    display: flex;
    justify-content:space-between;
    width:20%;
    margin:auto;
    padding:0;
    font-size :20px
`
const Content1 = styled.div`
    margin:60px 400px;
`
const Content2 = styled.div`
    display:flex;
    flex:wrap;
`
const Content11 = styled.div`
    display: flex;
`
const Content1_img = styled.div`
    margin-right: 60px;
`
const ProductImg = styled.img`
    width:300px;
    height:300px;
`
const ProductImg1 = styled.img`
    width:150px;
    height:150px;
`
const Product = styled.div`
width : 200px;
height : 386px;
padding : 15px;
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
const Price = styled.div`
margin-top : 10px;
color : red;
font-size : 16px;
display: inline-block;
`
const Content1_detail = styled.div`
`
const SalePrice = styled.div`

`
export default WebsiteDetail