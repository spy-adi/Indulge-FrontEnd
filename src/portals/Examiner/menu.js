import {
    HomeOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/ex/",
        path:"/ex/",
        icon:<HomeOutlined />,
        name:"Review & Score",
        children:null,
    },
    {
        key:"/ex/sub-eval",
        path:"/ex/sub-eval",
        icon:<HomeOutlined />,
        name:"Submitted Evaluation",
        children:null,
    },
    {
        key:"/ex/sub-hon",
        path:"/ex/sub-hon",
        icon:<HomeOutlined />,
        name:"Submitted Honorarium Details",
        children:null,
    }
]

export default menu;
