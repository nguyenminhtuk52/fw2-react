import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAllUsers, removeUsers } from "../../../api/user";

// import { useQuery } from 'react-query'
const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    id: string | number
}



const ListUsers = () => {
    const [dataTable, setDataTable] = useState([]);
    const DeleteUser = async (id: any) => {
        if (window.confirm("Bạn có muốn xóa không ?")) {
            await removeUsers(id);
            const data = await getAllUsers();   
            setDataTable(data.data);
        }
    }
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await getAllUsers()
                setDataTable(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts()
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Chức năng',
            dataIndex: 'id',
            key: 'id',
            render: id => <Space>
                <Button type="primary"><Link to={`/admin/user/edit/${id}`}><EditOutlined /></Link></Button>
                <Button type="danger" onClick={() => DeleteUser(id)} ><DeleteOutlined /></Button>
            </Space>
            ,
        },
    ];
    return (
        <>
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

export default ListUsers