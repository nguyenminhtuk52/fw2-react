import { Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readCate, updateCate } from '../../../api/category';
import UploadImage from '../../../components/UploadImg';

const EditCate = () => {
  const {id} = useParams()
  console.log(id);
  const [form] = Form.useForm();
  const getCate =  async () =>{
    const {data} = await readCate(id)
    form.setFieldsValue(data);
}
getCate()
  const navigate = useNavigate()
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      await updateCate(values, id)
      message.success("Cập nhật thành công")
      navigate('/admin/category')
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
        Thêm mới Danh Mục
      </Typography.Title>
    </Breadcrumb>
    <Row gutter={16}>
      <Col span={14}>
        <Form
        form={form}
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
            label="Tên Danh Mục"
            rules={[{ required: true, message: 'Tên danh mục được trống' }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập Nhật danh mục
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
  );
};

export default EditCate;