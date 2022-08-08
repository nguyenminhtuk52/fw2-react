import { Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { upload } from '../api/image';
import { CategoryType } from '../../../types/categoryType';
import { read, updateProduct } from '../../../api/product';
import { getAllCate } from '../../../api/category';
import UploadImage from '../../../components/UploadImg';


const UpdateProduct = () => {
	const [categorys, setCategorys] = useState<CategoryType[]>([])
	const { id } = useParams()
	useEffect(() => {
		const getAllCatee = async () => {
			const { data } = await getAllCate();
			setCategorys(data);
		}
		getAllCatee();
	}, [])
	// console.log(id);
	const [form] = Form.useForm();
	const getProducts = async () => {
		const { data } = await read(id)
		form.setFieldsValue(data);
	}
	getProducts()
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			await updateProduct(values, id)
			message.success("Cập nhật thành công")
			navigate('/admin/product')
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Cập nhật
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
						form={form}
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
						<Form.Item
							name="image"
							labelCol={{ span: 24 }}
							label="Ảnh sản phẩm"
							rules={[{ required: true, message: 'Ảnh sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>
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
										<Option >Choose category</Option>
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
								Cập nhật sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default UpdateProduct;