import React from "react";
import Selector from "./Selector";
import { Typography } from "@material-ui/core";
import { Button, Form } from "antd";

function Session(props) {
  const Session = ["2021-2022", "2020-2021", "2019-2020"];
  const Semester = ["Monsoon", "Winter"];

  function onFinish(values) {
    if (values) {
      console.log("Success:", values);
    }
  }

  function onFinishFailed(errorInfo) {
    if (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  }

  function handleClick(params) {
    props.onClick(params);
  }
  const style = props.style;
  return (
    <div className="container-fluid" style={style}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ Year:Session[0],Semester:"Monsoon" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="Year"
          label={
            <Typography
              style={{
                color: "#001529",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
            >
              Session Year
            </Typography>
          }
        >
          <Selector
            id="Session"
            list={Session}
            placeholder={Session[0]}
            style={{
              width: "200px",
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item
          name="Semester"
          label={
            <Typography
              style={{
                color: "#001529",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "Open Sans"
              }}
            >
              Session
            </Typography>
          }
        >
          <Selector
            id="Semester"
            list={Semester}
            placeholder={Semester[0]}
            style={{
              width: "200px",
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item style={{textAlign:"center"}}>
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Show
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Session;
