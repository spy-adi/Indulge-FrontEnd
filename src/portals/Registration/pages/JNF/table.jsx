import MaterialTable from "material-table";
import {Button} from 'antd';
import {tableIcons} from '../../../../CommonComponents';


function Table({data}) {
  return (
    <MaterialTable
      icons={tableIcons}
      title="Posted Jobs"
      columns={[
    { title: "Company Name", field: "name" },
    { title: "Job Designation", field: "jd" },
    { title: "Hr", field: "hr" },
    { title: "Location", field: "location" },
    { title: "Posted On", field: "postedOn", type: "Date" },
  ]}
      data={data}
      actions={[
        {
          icon: "save",
          tooltip: "Save User",
          onClick: (event, rowData) => console.log("You saved " + rowData.id),
        },
      ]}
      components={{
        Action: (props) => (
          <Button
            onClick={(event) => props.action.onClick(event, props.data)}
            color="primary"
            variant="contained"
            style={{ textTransform: "none" }}
            size="small">
            View
          </Button>
        ),
      }}
      options={{
        exportButton: true,
        search: true,
      }}
    />
  );
}

export default Table;
