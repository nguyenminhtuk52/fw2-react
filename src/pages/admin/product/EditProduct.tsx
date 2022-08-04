import { Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { upload } from '../../../api/image';
import { createProduct, getAll, read, updateProduct } from '../../../api/product';
import UploadImage from '../../../components/UploadImg';

const EditProduct = () => {
  const {id} = useParams()
  console.log(id);
  const [form] = Form.useForm();
  const getProducts =  async () =>{
    const {data} = await read(id)
    form.setFieldsValue(data);
}
getProducts()
  const [previewImage, setPreviewImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			await updateProduct(values,id)
			message.success("Cập nhật thành công")
			navigate('/admin/product')
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0]
    console.log(file);
    
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }
  }

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image)
      const data = res.data
      setImageUrl(data.url)
    } catch(err:any) {
      console.log(err);
      message.error(JSON.stringify(err.message))
    }
  }
  return (
    <>
      <Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Cập nhật sản phẩm
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
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										<Option value="phone">Điện thoại</Option>
										<Option value="laptop">Laptop</Option>
										<Option value="accessories" disabled>
											Phụ kiện
										</Option>
										<Option value="tablet">Máy tính bảng</Option>
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

export default EditProduct;