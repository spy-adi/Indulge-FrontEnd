import React, { useState } from "react";
import { Menu, Drawer, Button, notification } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../index.css";
import { BellTwoTone } from "@ant-design/icons";

const { SubMenu } = Menu;
const openNotification = (placement) => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    placement,
  });
};
function Navbar(props) {
  const [visible, setVisible] = useState(false);
  const menuItems = [];
  let childrens;
  props.menu.forEach((item) => {
    if (item.children === null) {
      menuItems.push(
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      );
    } else {
      childrens = [];
      item.children.forEach((child) => {
        childrens.push(
          <Menu.Item key={child.key}>
            <Link to={child.path}>{child.name}</Link>
          </Menu.Item>
        );
      });
      menuItems.push(
        <SubMenu key={item.key} icon={item.icon} title={item.name}>
          {childrens}
        </SubMenu>
      );
    }
  });
  return (
    <nav className="navbar">
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="IPRP"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu theme="dark" defaultSelectedKeys={["/st/home"]} mode="inline">
          {menuItems}
        </Menu>
      </Drawer>
      <div style={{float:"right"}}>
      <Button spin="true" onClick={openNotification} style={{marginRight:"10px"}}>
        <BellTwoTone />
      </Button>
      <span>
        <Button type="primary" danger style={{marginRight:"10px"}}>
          <a href="/">Log Out</a>
        </Button>
      </span>
      </div>
    </nav>
  );
}

export default Navbar;
