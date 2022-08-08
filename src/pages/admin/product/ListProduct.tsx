import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll, read, remove, updateProduct } from "../../../api/product";
const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    id: string | number
}



const ListProduct = () => {
    const [dataTable, setDataTable] = useState([]);
    const DeleteProduct = async (id: any) => {
        if (window.confirm("Bạn có muốn xóa không ?")) {
            await remove(id);
            const data = await getAll();   
            setDataTable(data.data);
        }
    }
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await getAll()
                setDataTable(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: image => <img src= {image}  alt="" width={'100px'} /> 
          },
        {
            title: 'Giá khuyến mãi',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: status => <span>{status ? "Hết hàng" : 'Còn Hàng'}</span>
        },
        {
            title: 'Chức năng',
            dataIndex: 'id',
            key: 'id',
            render: id => <Space>

                <Button type="primary"><Link to={`/admin/product/edit/${id}`}><EditOutlined /></Link></Button>
                <Button type="danger" onClick={() => DeleteProduct(id)} ><DeleteOutlined /></Button>
            </Space>
            ,
        },
    ];
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
`

export default ListProduct