import { Select } from "antd";

const { Option } = Select;

const sector = [];

  sector.push(<Option key={"ana"}>{"Analytics"}</Option>);
  sector.push(<Option key={"con"}>{"Consulting"}</Option>);
  sector.push(<Option key={"coret"}>{"Core(Technical)"}</Option>);
  sector.push(<Option key={"bfsi"}>{"BFSI"}</Option>);
  sector.push(<Option key={"its"}>{"IT/Software"}</Option>);
  sector.push(<Option key={"edt"}>{"Ed Tech"}</Option>);
  sector.push(<Option key={"ecom"}>{"E-commerce"}</Option>);
  sector.push(<Option key={"other"}>{"Other"}</Option>);

  const duration = [];

  duration.push(<Option key={"2mon"}>{"May-July 2022 (For ALL Pre-final year students - 2023 Batch)"}</Option>);
  duration.push(<Option key={"6mon"}>{"July - Dec 2022(For Final Year M.Tech/ MBA - Business Analytics students - 2022 Batch)"}</Option>);

  const btech4yr = [];

btech4yr.push(<Option key={"cve"}>{"Civil Engineering"}</Option>);
btech4yr.push(<Option key={"chem"}>{"Chemical Engineering"}</Option>);
btech4yr.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);
btech4yr.push(<Option key={"ep"}>{"Engineering Physics Engineering"}</Option>);
btech4yr.push(<Option key={"ee"}>{"Electrical Engineering"}</Option>);
btech4yr.push(<Option key={"ece"}>{"Electronics and Communication Engineering"}</Option>);
btech4yr.push(<Option key={"eie"}>{"Electronics and Instrumentation Engineering"}</Option>);
btech4yr.push(<Option key={"ev"}>{"Environmental Engineering"}</Option>);
btech4yr.push(<Option key={"mech"}>{"Mechanical Engineering"}</Option>);
btech4yr.push(<Option key={"me"}>{"Mineral Engineering"}</Option>);
btech4yr.push(<Option key={"fme"}>{"Mining Engineering"}</Option>);
btech4yr.push(<Option key={"mme"}>{"Mining and Machinery Engineering"}</Option>);
btech4yr.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);

const dm = [];

dm.push(<Option key={"cve"}>{"Second Major Civil Engineering"}</Option>);
dm.push(<Option key={"chem"}>{"Second Major Chemical Engineering"}</Option>);
dm.push(<Option key={"cse"}>{"Second Major Computer Science and Engineering"}</Option>);
dm.push(<Option key={"ep"}>{"Second Major Engineering Physics Engineering"}</Option>);
dm.push(<Option key={"ee"}>{"Second Major Electrical Engineering"}</Option>);
dm.push(<Option key={"ece"}>{"Second Major Electronics and Communication Engineering"}</Option>);
dm.push(<Option key={"eie"}>{"Second Major Electronics and Instrumentation Engineering"}</Option>);
dm.push(<Option key={"ev"}>{"Second Major Environmental Engineering"}</Option>);
dm.push(<Option key={"mech"}>{"Second Major Mechanical Engineering"}</Option>);
dm.push(<Option key={"me"}>{"Second Major Mineral Engineering"}</Option>);
dm.push(<Option key={"fme"}>{"Second Major Second Major Mining Engineering"}</Option>);
dm.push(<Option key={"mme"}>{"Second Major Mining and Machinery Engineering"}</Option>);
dm.push(<Option key={"pe"}>{"Second Major Petroleum Engineering"}</Option>);

const dd = [];

dd.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);


const im = [];

im.push(<Option key={"mnc"}>{"Mathematics and Computing"}</Option>);
im.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
im.push(<Option key={"ap"}>{"Applied Geophysics"}</Option>);

const mtech = [];

mtech.push(<Option key={"ge"}>{"Geo Exploration"}</Option>);
mtech.push(<Option key={"eg"}>{"Engineering Geology"}</Option>);
mtech.push(<Option key={"eqse"}>{"Earthquake Science & Engineering"}</Option>);
mtech.push(<Option key={"ce"}>{"Chemical Engineering"}</Option>);
mtech.push(<Option key={"geo"}>{"Geotechnical Engineering"}</Option>);
mtech.push(<Option key={"se"}>{"Structural Engineering"}</Option>);
mtech.push(<Option key={"cse"}>{"Computer Science & Engineering"}</Option>);
mtech.push(<Option key={"cses"}>{"Computer Science & Engineering with Specialization in Information Security"}</Option>);
mtech.push(<Option key={"da"}>{"Data Analytics"}</Option>);
mtech.push(<Option key={"pse"}>{"Power System Engineering"}</Option>);
mtech.push(<Option key={"peed"}>{"Power Electronics & Electrical Drives"}</Option>);
mtech.push(<Option key={"csp"}>{"Communication & Signal Processing"}</Option>);
mtech.push(<Option key={"ooce"}>{"Optoelctronics & Optical Communication Engineering"}</Option>);
mtech.push(<Option key={"rme"}>{"RF and Microwave Engineering"}</Option>);
mtech.push(<Option key={"vlsi"}>{"VLSI Design"}</Option>);
mtech.push(<Option key={"ese"}>{"Environmental Science & Engineering"}</Option>);
mtech.push(<Option key={"fme"}>{"Mineral Engineering"}</Option>);
mtech.push(<Option key={"fe"}>{"Fuel Engineering"}</Option>);
mtech.push(<Option key={"mme"}>{"Mining Machinery Engineering"}</Option>);
mtech.push(<Option key={"md"}>{"Machine Design"}</Option>);
mtech.push(<Option key={"met"}>{"Maintenance Engineering & Tribology"}</Option>);
mtech.push(<Option key={"mfe"}>{"Manufacturing Engineering"}</Option>);
mtech.push(<Option key={"te"}>{"Thermal Engineering"}</Option>);
mtech.push(<Option key={"iem"}>{"Industrial Engineering & Management"}</Option>);
mtech.push(<Option key={"gtc"}>{"Geomatics"}</Option>);
mtech.push(<Option key={"me"}>{"Mining Engineering"}</Option>);
mtech.push(<Option key={"oe"}>{"Opencast Mining"}</Option>);
mtech.push(<Option key={"tust"}>{"Tunneling & Underground Space Technology"}</Option>);
mtech.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);
mtech.push(<Option key={"phse"}>{"Pharmaceutical Science and Engineering"}</Option>);

const phd = [];

phd.push(<Option key={"cve"}>{"Civil Engineering"}</Option>);
phd.push(<Option key={"ce"}>{"Chemical Engineering"}</Option>);
phd.push(<Option key={"cse"}>{"Computer Science and Engineering"}</Option>);
phd.push(<Option key={"phy"}>{"Physics"}</Option>);
phd.push(<Option key={"ee"}>{"Electrical Engineering"}</Option>);
phd.push(<Option key={"ece"}>{"Electronic Engineering"}</Option>);
phd.push(<Option key={"ese"}>{"Environmental Engineering"}</Option>);
phd.push(<Option key={"mech"}>{"Mechanical Engineering"}</Option>);
phd.push(<Option key={"fme"}>{"Fuel, Minerals & Metallurgical Engineering"}</Option>);
phd.push(<Option key={"me"}>{"Mining Engineering"}</Option>);
phd.push(<Option key={"mme"}>{"Mining Machinery Engineering"}</Option>);
phd.push(<Option key={"pe"}>{"Petroleum Engineering"}</Option>);
phd.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
phd.push(<Option key={"agp"}>{"Applied Geophysics"}</Option>);
phd.push(<Option key={"mnc"}>{"Mathematics & Computing"}</Option>);
phd.push(<Option key={"chem"}>{"Chemistry"}</Option>);
phd.push(<Option key={"hss"}>{"Humanities & Social Sciences"}</Option>);

const mba = [];

mba.push(<Option key={"gen"}>{"General"}</Option>);
mba.push(<Option key={"mr"}>{"Marketing"}</Option>);
mba.push(<Option key={"op"}>{"Operations"}</Option>);
mba.push(<Option key={"fi"}>{"Finance"}</Option>);
mba.push(<Option key={"hr"}>{"Human Resources"}</Option>);
mba.push(<Option key={"ba"}>{"Business Analytics"}</Option>);


const msc2yr = [];

msc2yr.push(<Option key={"chem"}>{"Chemistry"}</Option>);
msc2yr.push(<Option key={"mnc"}>{"Mathematics and Computing"}</Option>);
msc2yr.push(<Option key={"phy"}>{"Physics"}</Option>);

const msc3yr = [];

msc3yr.push(<Option key={"ag"}>{"Applied Geology"}</Option>);
msc3yr.push(<Option key={"agp"}>{"Applied Geophysics"}</Option>);

const test = [];

test.push(<Option key={"tech"}>{"Technical"}</Option>);
test.push(<Option key={"apti"}>{"Aptitude"}</Option>);

const qround = [];

qround.push(<Option key={"gd"}>{"Group Discussion"}</Option>);
qround.push(<Option key={"cs"}>{"Case Study"}</Option>);
qround.push(<Option key={"int"}>{"Interview"}</Option>);

export {
    qround,
    test,
    msc2yr,
    msc3yr,
    btech4yr,
    mba,
    mtech,
    sector,
    im,
    dd,
    dm,
    duration,
    phd,
  }