import React, { useState,useEffect } from "react";
import { Layout, Menu } from "antd";
import mainlogo from "../images/scholar.png";
import { Link } from "react-router-dom";
import "../index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(props.menu[0].path);
  const menuItems = [];
  let childrens;

  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }

  function handleClick(event){
    setSelectedKey(window.location.pathname);
  }
  useEffect(()=>{
    setSelectedKey(window.location.pathname);;
  },[]);
  props.menu.forEach((item) => {
    if (item.children === null) {
      menuItems.push(
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      );
    } else {
      childrens=[];
      item.children.forEach((child) => {
        childrens.push(<Menu.Item key={child.key}>
          <Link to={child.path}>{child.name}</Link>
        </Menu.Item>);
      })
      menuItems.push(
        <SubMenu key={item.key} icon={item.icon} title={item.name}>
          {childrens}
        </SubMenu>
      );
    }
  });
  return (
    <Sider className="sidebar" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ padding: "0 25%" }}>
        <span>
          {collapsed && (
            <img src={mainlogo} alt="" style={{ height: "45px" }} />
          )}
          {!collapsed && <h1 style={{ color: "white" }}>IPRP</h1>}
        </span>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[props.menu[0].path]}
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={handleClick}
      >
        {menuItems}
      </Menu>
    </Sider>
  );
}

export default SideBar;