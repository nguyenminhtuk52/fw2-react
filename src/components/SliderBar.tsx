import { Layout, Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
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
              label: 'Điện thoại',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Laptop',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="/admin/product/add">Điện thoại</Link>
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Âm thanh',
            },
          ]}
        />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default SliderBar