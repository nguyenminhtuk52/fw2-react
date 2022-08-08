import { Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readUser, updateUser } from '../../../api/user';

const EditUser = () => {
  const { id } = useParams()
  console.log(id);
  const [form] = Form.useForm();
  const getCate = async () => {
    const { data } = await readUser(id)
    form.setFieldsValue(data);
  }
  getCate()
  const navigate = useNavigate()
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      await updateUser(values, id)
      message.success("Cập nhật thành công")
      navigate('/admin/user')
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
          Cập Nhật Tài Khoản
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
              name="email"
              labelCol={{ span: 24 }}
              label="Email Address"
              rules={[{ required: true, message: 'Email Không Được Để Tróng' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="phone"
              labelCol={{ span: 24 }}
              label="Phone Number"
              rules={[{ required: true, message: 'Số Điện Thoại Không Đuọc để Trống' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              labelCol={{ span: 24 }}
              label="Password"
              rules={[{ required: true, message: 'Password Không Được Để Trống' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập Nhật Tài Khoản
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditUser;