import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import WebsiteFooter from '../components/WebsiteFooter'
import WebsiteHeader from '../components/WebsiteHeader'
import WebsiteMain from '../components/WebsiteMain'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <Layout>
      <WebsiteHeader />
      <Outlet></Outlet>
      <WebsiteFooter />
    </Layout>
  )
}

export default WebsiteLayout