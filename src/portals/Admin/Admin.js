import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import {
  AdDashboard,
  // Forums,
} from "./components";
import { Routes, Route } from "react-router-dom";
import adminmenu from "./menu";

function adRegistration() {
  return (
    <>
      <Navbar menu={adminmenu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={adminmenu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<AdDashboard />} />
            {/* <Route path="/forum" element={<Forums />} /> */}
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default adRegistration;
