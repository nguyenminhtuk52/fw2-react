import { Layout, Menu } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
const { Sider, Content } = Layout;
type Props = {}

const SliderBar = (props: Props) => {
  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to="/admin/product">Điện thoại</Link>,
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: <Link to="/admin/product">Danh Mục</Link>,
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="#">User</Link>
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Âm thanh',
            },
          ]}
        />
      </Sider>
      <Content><Outlet></Outlet></Content>
    </Layout>
  )
}

export default SliderBar