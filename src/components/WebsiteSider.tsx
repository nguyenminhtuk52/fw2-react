import { Menu, MenuProps, message } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { useEffect, useState } from 'react'
import { AppleOutlined, LaptopOutlined, NotificationOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { getAllCate } from '../api/category';
import { CategoryType } from '../types/categoryType';
type Props = {
  onSendCates: (data: any) => void
}
const SiderWebsite = (props: Props) => {
  const navLink: React.CSSProperties = {
    textAlign: 'center',
    borderBottom: '2px solid black',
  }
  const { id } = useParams()
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Sider width={220} style={{ boxShadow: '10px 7px 10px rgba(5,0,0,0.5)' }}>
      <Menu
       mode="inline"
        style={{ height: '100%', borderRight: 0 }}>
        {categories && categories.map((item: any) => {
          return (
            <Link style={navLink} key={item.id} to={`/category/${item.id}`} >
              <Menu.Item style={{ color: 'black' }} key={item.id}>{item.name}<RightOutlined style={{ color: 'black', float: 'right', marginTop: '10px' }} /></Menu.Item></Link>
          )
        })}
      </Menu>
    </Sider>
  )
}
export default SiderWebsite