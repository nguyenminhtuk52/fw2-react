import { Menu, MenuProps } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
type Props = {}
const SiderStyle : React.CSSProperties={
  height : '380px'
}
const WebsiteSider = (props: Props) => {
   
  return (
    <Sider className="site-layout-background" width={220}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Điện thoại',
        },
        {
          key: '2',
          icon: <UserOutlined/>,
          label: 'Laptop',
        },
        {
          key: '3',
          icon: <UserOutlined/>,
          label: 'Máy tính bảng',
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: 'Âm thanh',
        },
        {
          key: '5',
          icon: <UserOutlined/>,
          label: 'Đồng hồ',
        },
        {
          key: '6',
          icon: <UserOutlined/>,
          label: 'Nhà thông minh',
        },
        {
          key: '7',
          icon: <UserOutlined />,
          label: 'Phụ kiện',
        },
        {
          key: '8',
          icon: <UserOutlined/>,
          label: 'PC - Màn hình',
        },
        {
          key: '9',
          icon: <UserOutlined/>,
          label: 'Tivi',
        },
        {
          key: '10',
          icon: <UserOutlined />,
          label: 'Thu cũ',
        },
        {
          key: '11',
          icon: <UserOutlined/>,
          label: 'Hàng cũ',
        },
        {
          key: '12',
          icon: <UserOutlined/>,
          label: 'Khuyến mãi',
        },
        {
          key: '13',
          icon: <UserOutlined/>,
          label: 'Tin công nghệ',
        },
      ]}
    />
  </Sider>
  )
}

export default WebsiteSider