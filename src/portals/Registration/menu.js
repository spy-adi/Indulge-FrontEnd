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
        key:"/reg/",
        path:"/reg/",
        icon:<DashboardOutlined />,
        name:"Dashboard",
        children:null,
    },
    {
        key:"/reg/reg",
        path:"/reg/reg",
        icon:<DashboardOutlined />,
        name:"Registration",
        children:[
            {
                key:"/reg/intern",
                path:"/reg/intern",
                name:"Internship",
            },
            {
                key:"/reg/placement",
                path:"/reg/placement",
                name:"Placement",
            },
        ]
    },
    {
        key:"/reg/files",
        path:"/reg/files",
        icon:<FolderViewOutlined />,
        name:"Files",
        children:null
    },
    {
        key:"/reg/add_new",
        path:"/reg/add_new",
        icon:<PlusCircleOutlined />,
        name:"Add New",
        children:null
    }
]

export default menu;
