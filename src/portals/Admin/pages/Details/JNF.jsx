import React from "react";
import { Layout } from "antd";
import { tableIcons} from "../../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

function JNF() {
  const columns=[
    { title: "Company Name", field: "name" },
    { title: "Job Designation", field: "jd" },
    { title: "Hr", field: "hr" },
    { title: "Location", field: "location" },
    { title: "Posted On", field: "postedOn", type: "Date" },
  ];

  const data = [
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 0 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 1 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 2 },
  { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 3 }
];
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="JNF"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
                  {
                    icon: tableIcons.Delete,
                    tooltip: 'Delete',
                    // eslint-disable-next-line no-restricted-globals
                    onClick: (event, rowData) => confirm('You want to delete '+rowData.jd)
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

export default JNF;