import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type Props = {}

const HeaderWeb = (props: Props) => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <div></div>
      <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to='/admin/product'><span>Product</span></Link>
      </Menu.Item>
      <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to='/admin/product'><span>Category</span></Link>
      </Menu.Item>
      <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to='/admin/product'><span>User</span></Link>
      </Menu.Item>
    </Menu>
  );
}

export default HeaderWeb