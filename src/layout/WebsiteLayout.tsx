import { Layout } from 'antd'
import React from 'react'
import WebsiteFooter from '../components/WebsiteFooter'
import WebsiteHeader from '../components/WebsiteHeader'
import WebsiteMain from '../components/WebsiteMain'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <Layout>
      <WebsiteHeader />
      <WebsiteMain />
      <WebsiteFooter />
    </Layout>
  )
}

export default WebsiteLayout