import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
function CreateNew() {

  const { Meta } = Card;
  
  return (
    <Content style={{ margin: "25px 25px" }}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={6}>
      <Link to={'/ad/add_new/scholar'}>
      <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px"}}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Scholar"
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/add_new/supervisor'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Supervisor"
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/add_new/examiner'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Examiner"
    />
  </Card>
  </Link>
  </Col>
  
    </Row>
    </Content>
  );
}

export default CreateNew;
