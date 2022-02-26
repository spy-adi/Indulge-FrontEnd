import React from "react";
import { Form, Input, Layout, Button, Col, Row, Upload } from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import "../../Registration.css";
import "antd/dist/antd.css";

const { Content } = Layout;
const { TextArea } = Input;

function AddExaminer() {
  const [form] = Form.useForm();
  function onFinish(values) {
    console.log("Success:", values);
  }

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  function onReset() {
    form.resetFields();
  }

  function normFile(e) {
    if (e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }

  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="card">
            <div className="card-header text-center form-header">
              Add Examiner
            </div>
            <div className="card-body form-body">
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 15 }}
                layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="examinerId"
                  label="Examiner ID"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="institute"
                  label="Institute"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Id"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="contact"
                  label="Contact"
                  rules={[{ required: true }]}
                >
                  <Input.Group>
                    <Row gutter={8}>
                      <Col span={4}>
                        <Input />
                      </Col>
                      <Col span={12}>
                        <Input />
                      </Col>
                    </Row>
                  </Input.Group>
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true }]}
                >
                  <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                </Form.Item>
                <Form.Item
                  name="upload"
                  label="Upload Image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload name="logo" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: "10px" }}
                    >
                      Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default AddExaminer;
