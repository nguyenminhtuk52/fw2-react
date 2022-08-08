import Headers from '../components/Header/HeaderAdmin'
import Slider from '../components/SliderBar'
import { Layout } from 'antd'
import { Navigate } from 'react-router-dom'

type Props = {}

function layoutAdmin({ }: Props) {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return (
                <Layout>
                    <Headers />
                    <Slider></Slider>
                </Layout>
            )
        }
    } else {
        return <Navigate to="/login" />
    }
}

export default layoutAdmin