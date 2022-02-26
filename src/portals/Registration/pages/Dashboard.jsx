import React  from "react";
import { Layout, Card } from "antd";
import {ism, graduation, campus} from "../images";
import "../Registration.css";

const { Content } = Layout;

const cardContent = [
  {
    title: "About Us",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eosquaerat laboriosam veniam optio dolorum nam facilis quia culpa amet, sit assumenda quos harum doloremque modi corporis.Reprehenderit dolore quia fuga.",
  },
  {
    title: "Why Recruit from Us??",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eosquaerat laboriosam veniam optio dolorum nam facilis quia culpa amet, sit assumenda quos harum doloremque modi corporis.Reprehenderit dolore quia fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eosquaerat laboriosam veniam optio dolorum nam facilis quia culpa amet, sit assumenda quos harum doloremque modi corporis.Reprehenderit dolore quia fuga.",
  },
];

function Dashboard() {
  return (
    <Content style={{ margin: "10px 25px" }}>
      <div className="container">
        <div className="row dashboard-header">
          <div className="dashboard-header--text col-lg-6">
            <h1>Welcome to IIT ISM.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aperiam temporibus voluptas hic, et exercitationem
              dolor qui laboriosam culpa debitis, fugit modi ipsum voluptatibus
              labore sint. Doloremque similique corporis nesciunt!
            </p>
          </div>
          <div className="dashboard-header--image col-lg-6">
            <img src={campus} alt="" className="dashimage dashimage-i1" />
            <img src={graduation} alt="" className="dashimage dashimage-i2" />
            <img src={ism} alt="" className="dashimage dashimage-i3" />
          </div>
        </div>
        <div className="dashboard--body row">
          {cardContent.map((item) => {
            return (
              <Card
                className="col-lg-6"
                title={item.title}
                style={{ margin: "10px 0px", fontSize: 23 }}>
                <p>{item.body}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Content>
  );
}

export default Dashboard;
