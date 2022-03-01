import React from "react";
import { Layout } from "antd";
import { tableIcons} from "../../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

function HR() {
  const columns=[
    {title:"Sr. No.",field:"id"},
    {title:"Name",field:"name"},
    {title:"Company",field:"company"},
    {title:"Email",field:"email"},
    {title:"Contact",field:"contact"}
  ];
  const data=[
    {id:"1",name:"Oliver Hansen",company:"Adobe",email:"olivhans@yahoo.com",contact:"(600) 764-9595"},
    {id:"2",name:"Van Henry",company:"Google",email:"Vanhan@rediffmail.com",contact:"(324) 601-1687"},
    {id:"3",name:"April Tucker",company:"Microsoft",email:"tucker@outlook.com",contact:"(682) 585-5838"},
    {id:"4",name:"Ralph Hubbard",company:"Meta",email:"Hubbard@gmail.com",contact:"(742) 503-4960"}
  ]
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="HR"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
                  {
                    icon: tableIcons.Delete,
                    tooltip: 'Delete',
                    // eslint-disable-next-line no-restricted-globals
                    onClick: (event, rowData) => confirm('You want to delete '+rowData.name)
                  }
                  ]}
                  options={{
                    search:true,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                    actionsColumnIndex: -1, 
                    addRowPosition: "first"
                  }}
                />
            </div>
        </Content>
  );
}

export default HR;