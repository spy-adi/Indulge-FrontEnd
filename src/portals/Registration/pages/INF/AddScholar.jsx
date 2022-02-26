import React from "react";
import {
  Form,
  Input,
  Layout,
  Button,
  Col,
  Row,
  Select,
  DatePicker,
  Upload,
} from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined"
import "../../Registration.css";
import "antd/dist/antd.css";

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

function AddScholar() {
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
              Add Scholar
            </div>
            <div className="card-body form-body">
              <Form
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 15 }}
                layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      name="admn"
                      label="Admission No"
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
                      name="department"
                      label="Department"
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
                  </div>
                  <div className="col-md-6">
                    <Form.Item
                      name="registration_type"
                      label="Registration Type"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="full">Full</Option>
                        <Option value="part">Part</Option>
                        <Option value="external">External</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="registration_date"
                      label="Registration Date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                    <Form.Item
                      name="qualification_degree"
                      label="Qualification Degree"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="status"
                      label="Status"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="active">Active</Option>
                        <Option value="graduated">Graduated</Option>
                        <Option value="terminated">Terminated</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="fellowship_status"
                      label="Fellowship Status"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="JRF">JRF</Option>
                        <Option value="SRF">SRF</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="upload"
                      label="Upload Image"
                      max={1}
                      fieldProps={{
                        name: "file",
                      }}
                      action="/upload.do"
                    >
                      <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload!</Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                    <div style={{textAlign:"center"}}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginRight:"10px"}}
                      >
                        Submit
                      </Button>
                      <Button htmlType="button" onClick={onReset}>
                        Reset
                      </Button>
                      </div>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default AddScholar;
