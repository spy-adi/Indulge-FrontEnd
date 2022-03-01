import React from "react";
import { Layout, Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

function Details() {

  const { Meta } = Card;
  return (
    <Content style={{ margin: "25px 25px" }}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8}>
      <Link to={'/ad/details/inf'}>
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
      description={<Title level={5}>INF</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={8}>
  <Link to={'/ad/details/jnf'}>
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
      description={<Title level={5}>JNF</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={8}>
  <Link to={'/ad/details/hr'}>
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
      description={<Title level={5}>HR</Title>}
    />
  </Card>
  </Link>
  </Col>
    </Row>
    </Content>
  );
}

export default Details;
