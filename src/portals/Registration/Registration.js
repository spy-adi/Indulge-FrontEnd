import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import {
  Dashboard,
  JNF,
  INF,
  Step1J,
  Step2J,
  Step3J,
  Step4J,
  Step5J,
  Forums,
  Preview,
  Steps,
  PreviewINF,
} from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Registration() {
  return (
    <>
      <Navbar menu={menu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forum" element={<Forums />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/placement" element={<JNF />} />
            <Route path="/placement/addNew/s1" element={<Step1J />} />
            <Route path="/placement/addNew/s2" element={<Step2J />} />
            <Route path="/placement/addNew/s3" element={<Step3J />} />
            <Route path="/placement/addNew/s4" element={<Step4J />} />
            <Route path="/placement/addNew/s5" element={<Step5J />} />
            <Route path="/intern" element={<INF />} />
            <Route path="intern/addNew" element={<Steps />} />
            <Route path="/preview/intern/job_id" element={<PreviewINF />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Registration;
