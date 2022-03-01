import {

  QuestionOutlined,
  DashboardOutlined,
  
} from "@ant-design/icons";

const adminmenu = [
  {
    key: "/ad/",
    path: "/ad/",
    icon: <DashboardOutlined />,
    name: "Dashboard",
    children: null,
  },
  {
    key: "/ad/details",
    path: "/ad/details",
    icon: <DashboardOutlined />,
    name: "Details",
    children: null,
  },
  {
    key: "/ad/forum",
    path: "/ad/forum",
    icon: <QuestionOutlined />,
    name: "Forum",
    children:null
  }
];

export default adminmenu;
