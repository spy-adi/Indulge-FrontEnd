import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { MonthColumnGraph, PieGraph } from "../components";
import "../Admin.css";

const { Content } = Layout;
const titleStyle = { backgroundColor: "#1A374D", color: "white" };
const innertitleStyle = { backgroundColor: "#2D4263", color: "white" };
function Dashboard() {
  return (
    <Content style={{ margin: "0 25px" }}>
      <div className="container">
        <Card
          className="outer-shadow"
          title="Recent INF/JNF Received"
          style={{ minHeight: 300 }}
          headStyle={titleStyle}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card
                className="shadow"
                type="inner"
                title="INF"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card
                className="shadow"
                type="inner"
                title="JNF"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  <table className="table">
                  <tbody>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Received</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Internship Examination"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                  <tbody>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                  <tbody>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="INF Received"
              bordered={true}
              headStyle={titleStyle}
            >
              <MonthColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="Placement Examination"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                  <tbody>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                    className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    <table className="table">
                  <tbody>
                      <tr>
                        <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                      <tr>
                      <td>Date</td>
                        <td>TATA</td>
                        <td>
                          <a href="#">View Result</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
              className="outer-shadow"
              title="JNF Received"
              bordered={true}
              headStyle={titleStyle}
            >
              <MonthColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Pending Request"
              style={{ minHeight: 507 }}
              headStyle={titleStyle}
            >
              <table className="table">
                  <tbody>
                    <tr>
                      <td>TATA</td>
                      <td>INF</td>
                    </tr>
                    <tr>
                      <td>TATA</td>
                      <td>JNF</td>
                    </tr>
                    <tr>
                      <td>TATA</td>
                      <td>JNF</td>
                    </tr>
                    <tr>
                      <td>TATA</td>
                      <td>INF</td>
                    </tr>
                  </tbody>
                </table>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
              className="outer-shadow"
              title="Sector of Companies applied"
              style={{ minHeight: 200 }}
              headStyle={titleStyle}
            >
              <PieGraph />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Dashboard;
