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
        key:"/reg/preview",
        path:"/reg/preview",
        icon:<FolderViewOutlined />,
        name:"Preview",
        children:null
    },
    {
        key:"/reg/forum",
        path:"/reg/forum",
        icon:<PlusCircleOutlined />,
        name:"Forum",
        children:null
    }
]

export default menu;
