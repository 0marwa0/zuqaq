import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import Link from "next/link";
import "../style.less";
import SlideNav from "../components/SlideNav";

import NavBar from "../components/NavBar";
import { useState } from "react";
// const { Layout, Menu, Breadcrumb } = antd;
// const { UserOutlined, LaptopOutlined, NotificationOutlined } = icons;

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
const index = () => {
  const [show, setshow] = useState(false);
  const showProgrss = () => {
    setInterval(() => {
      setshow(true);
    }, 100);

    return setshow(false);
  };

  return (
    <div>
      {show ? <div className="progres_bar"></div> : null}

      <NavBar fun={showProgrss} />
      <SlideNav fun={showProgrss} />
    </div>
  );
};
export default index;
