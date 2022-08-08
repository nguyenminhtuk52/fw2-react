import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAllCate, removeCate } from "../../../api/category";

// import { useQuery } from 'react-query'
const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    id: string | number
}



const ListCategory = () => {
    const [dataTable, setDataTable] = useState([]);
    const DeleteCate = async (id: any) => {
        if (window.confirm("Bạn có muốn xóa không ?")) {
            await removeCate(id);
            const data = await getAllCate();   
            setDataTable(data.data);
        }
    }
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await getAllCate()
                setDataTable(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên Danh Mục',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Chức năng',
            dataIndex: 'id',
            key: 'id',
            render: id => <Space>

                <Button type="primary"><Link to={`/admin/category/edit/${id}`}><EditOutlined /></Link></Button>
                <Button type="danger" onClick={() => DeleteCate(id)} ><DeleteOutlined /></Button>
            </Space>
            ,
        },
    ];
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Danh Mục
                </Typography.Title>
                <Link to="/admin/category/add">
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

export default ListCategory