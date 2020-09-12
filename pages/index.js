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
// const { Layout, Menu, Breadcrumb } = antd;
// const { UserOutlined, LaptopOutlined, NotificationOutlined } = icons;

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
export default () => (
  <div>
    <NavBar />
    <SlideNav />
  </div>
);
