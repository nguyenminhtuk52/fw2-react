import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Form, Input, InputNumber, Select, message } from 'antd'
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";
import UploadImage from '../../../components/UploadImg';
import { CategoryType } from '../../../types/categoryType';
import { getAllCate } from '../../../api/category';
import axios from 'axios';
const { TextArea } = Input
const { Option } = Select;
type Props = {}

const AddProduct = () => {
	const [categorys, setCategorys] = useState<CategoryType[]>([])
	const navigate = useNavigate();
	const url = "https://api.cloudinary.com/v1_1/longtime/image/upload";
	const clou_preset = "dlbjt6js";
	const [img, setImg] = useState<any>({});
	useEffect(() => {
		const getAllCatee = async () => {
			const { data } = await getAllCate();
			setCategorys(data);
		}
		getAllCatee();
	}, [])
	const onFinish = async (values: any) => {
		let image = ""
		if (img) {
			const formData = new FormData();
			formData.append("file", img);
			formData.append("upload_preset", clou_preset);
			const { data } = await axios.post(url, formData, {
				headers: {
					"Content-Type": "application/form-data",
				},
			})
			image = data.url;
		}
		try {
			const newProduct = await createProduct({ ...values, image })
			message.success("Tạo mới thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	}
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	}
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới sản phẩm
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={10}>
					<UploadImage />
					{/* <UploadTest/> */}
				</Col>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
						// name="product"
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>
						<div>
							<label htmlFor="">Ảnh</label>
							<input type="file" onChange={(e) => { setImg(e.target.files[0]) }} id="formFile" />

						</div>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="category"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{categorys?.map(item => {
											return <Option key={item.id} value={item.id}>{item.name}</Option>
										})}
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="feature"
							labelCol={{ span: 24 }}
							label="Đặc điểm nổi bật"
							rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
						>
							<TextArea name="feature" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`


export default AddProduct