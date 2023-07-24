import { BellFilled, MailOutlined ,HomeFilled, HomeOutlined } from "@ant-design/icons";

import { Badge, Drawer, Image, List, Space, Typography } from "antd";

import { useEffect, useState } from "react";


import "../../../src/App.css";




function AppHeader() {

 




  return (

    <div className="AppHeader">

      <Image

        width={130}

        height={30}

        src="https://www.drivingvisionnews.com/wp-content/uploads/2021/05/BlueBinaries_logo_factofont-01.png"

      ></Image>

      <h3 className="blue">ANALYTICS PLATFORM </h3>

      <Space>

          <HomeOutlined style={{ fontSize: 24 }}/>

          <MailOutlined style={{ fontSize: 24 }}/>

      </Space>

   

    </div>

  );

}

export default AppHeader;