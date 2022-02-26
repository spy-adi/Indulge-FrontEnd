import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import {
  AddScholar,
  AddSupervisor,
  AddExaminer,
  Dashboard,
  AddNew,
  JNF,
  INF,
  Step1,
  Step2,
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
            <Route path="/add_new" element={<AddNew />} />
            <Route path="/add_new/scholar" element={<AddScholar />} />
            <Route path="/add_new/supervisor" element={<AddSupervisor />} />
            <Route path="/add_new/examiner" element={<AddExaminer />} />
            <Route path="/intern" element={<INF />} />
            <Route path="/placement" element={<JNF />} />
            <Route path="/placement/addNew/s1" element={<Step1 />} />
            <Route path="/placement/addNew/s2" element={<Step2 />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Registration;
