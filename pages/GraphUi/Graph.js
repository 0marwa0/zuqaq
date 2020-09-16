import "../../Styles/Graph.less";
import { Bar } from "react-chartjs-2";
import antd from "antd";
import { AiOutlineLineChart } from "react-icons/ai";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import LinerChart from "./LinerChart";
const { Menu, Dropdown, Button } = antd;
import { FaUsers } from "react-icons/fa";
const { Card } = antd;
const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
const Graph = () => {
  return (
    <div className="graph_page">
      <div className="grahp_head">

     <div style={{display:"flex"}}>
      <Card className="card"  style={{
        width:"200px"
        ,height:"150px", border:"none"
      }}>
        <div className="card_icon">
          <FaUsers />
        </div>
        <span>5,660,000 IQD</span>
        <div className="card_footer">
          <p>Expenses in December</p>
        </div>
      </Card>
   
    
    
    
      <Card className="card" style={{
        width:"200px"
        ,height:"150px",
        border:"none"
      }}>
        <div className="card_icon">
          <FaUsers />
        </div>
        <span>5,660,000 IQD</span>
        <div className="card_footer">
          <p>Expenses in December</p>
        </div>
      </Card>
      </div>
    <div >
     <Dropdown overlay={menu}>
            <Button >
              Discount <DownOutlined  />
            </Button>
          </Dropdown></div></div>
          <div  >
  <LinerChart/>
          </div>
        
          
           </div> 
  );
};

export default Graph;
