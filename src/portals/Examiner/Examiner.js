import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, Navbar, SideBar } from "../../CommonComponents";
import { EvaluationForm, Home, HonorariumForm , SubmittedHonorariumForm, SubmittedEvaluationForm} from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Examiner() {
  return (
    <>
    <Navbar menu={menu} />
      <Layout style={{ minHeight: "100vh" }}>
      <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eval/:admn" element={<EvaluationForm />} />
          <Route path="/hon" element={<HonorariumForm />} />
          <Route path="/sub-hon" element={<SubmittedHonorariumForm />} />
          <Route path="/sub-eval" element={<SubmittedEvaluationForm />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Examiner;
