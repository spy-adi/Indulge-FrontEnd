import React, { useState } from "react";
import { Button, Layout, notification } from "antd";
import "../index.css";
import { BellTwoTone } from "@ant-design/icons";

const { Header } = Layout;

function Headerr() {
  const [size, setSize] = useState(window.innerWidth);

  // const openNotification = (placement) => {
  //   notifications.forEach(element => {
  //     notification.info({
  //       message: "XYZ",
  //       description: "ABC",
  //       placement,
  //     });
  //   });
  // };
  
  const onLogout = ()=>{
      // logout();
  }
  React.useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  if (size < 767) {
    return (
      <Header
        className="site-layout-background"
        style={{ padding: 0, height: "fit-content" }}
      >
        <span>
          <img
            src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png"
            alt="Indian Institute of Technology (ISM) Dhanbad"
            style={{ height: "65px", display: "inline", marginLeft: "20px" }}
          />
          <h3 style={{ color: "#396EB0", display: "inline" }}>
            IIT (ISM), Dhanbad
          </h3>
        </span>
      </Header>
    );
  } else {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <span>
          <img
            src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png"
            alt="Indian Institute of Technology (ISM) Dhanbad"
            style={{ height: "65px", display: "inline", marginLeft: "20px" }}
          />
          <h3 style={{ color: "#396EB0", display: "inline" }}>
            Indian Institute of Technology (ISM), Dhanbad
          </h3>
        </span>
        <div style={{float:"right"}}>
            <Button className="notif" 
            // data-count={unreadNotifications ? unreadNotifications : 0} 
            // spin="true" onClick={()=> openNotification('topRight')} 
            style={{marginRight:"10px"}}>
        <BellTwoTone />
      </Button>
      <span>
        <Button type="primary" danger style={{marginRight:"10px"}}>
          <a href="#" onClick={onLogout}>Log Out</a>
        </Button>
      </span>
      </div>
      </Header>
    );
  }
}

export default Headerr;

