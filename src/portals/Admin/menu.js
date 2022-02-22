import {
    UnorderedListOutlined,
    CalendarOutlined,
    FolderViewOutlined,
    MailOutlined,
    PlusCircleOutlined,
    DashboardOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/ad/",
        path:"/ad/",
        icon:<DashboardOutlined />,
        name:"Dashboard",
        children:null,
    },
    {
        key:"/ad/details",
        path:"/ad/details",
        icon:<DashboardOutlined />,
        name:"Details",
        children:null,
    },
    {
        key:"/ad/files",
        path:"/ad/files",
        icon:<FolderViewOutlined />,
        name:"Files",
        children:null
    },
    {
        key:"/ad/add_new",
        path:"/ad/add_new",
        icon:<PlusCircleOutlined />,
        name:"Add New",
        children:null
    }
]

export default menu;
