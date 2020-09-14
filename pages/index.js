import { Layout, Menu, Breadcrumb, Button } from "antd";
import { BsList } from "react-icons/bs";
const { Header, Footer, Sider, Content } = Layout;
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Filter from "../pages/Filter";
const { SubMenu } = Menu;

import Link from "next/link";
import "../Styles/style.less";
import SlideNav from "../components/SlideNav";
import SideWindow from "../pages/SideWindow.js";
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
      <Filter />
      <SideWindow />
      <Layout>
        <Footer
          style={{
            width: "100%",
            height: "8%",
            padding: "12px 35px",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#24292e",
            zIndex: "9999",
          }}
        >
          <div className="footer">
            <span>
              <BsList
                color="white"
                style={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  marginRight: "5px",
                }}
              />
              <p>Home</p>
            </span>
            <Button type="primary">checkout</Button>
          </div>
        </Footer>
      </Layout>
      {/* {show ? <div className="progres_bar"></div> : null}

      <NavBar fun={showProgrss} />
      <SlideNav fun={showProgrss} /> */}
    </div>
  );
};
export default index;
