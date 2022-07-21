import Headers from '../components/Header/HeaderAdmin'
import Slider from '../components/SliderBar'
import { Layout } from 'antd'

type Props = {}

function layoutAdmin({ }: Props) {
    return (
        <Layout>
            <Headers />
            <Slider></Slider>
        </Layout>
    )
}

export default layoutAdmin