import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import {
  Dashboard, Details, HR, INF, JNF,
  // Forums,
} from "./components";
import { Routes, Route } from "react-router-dom";
import adminmenu from "./menu";

function Admin() {
  return (
    <>
      <Navbar menu={adminmenu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={adminmenu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/hr" element={<HR />} />
            <Route path="/details/inf" element={<INF />} />
            <Route path="/details/jnf" element={<JNF />} />
            {/* <Route path="/forum" element={<Forums />} /> */}
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Admin;
