import "../Styles/Graph.less";
import { Bar } from "react-chartjs-2";
import antd from "antd";
import { AiOutlineLineChart } from "react-icons/ai";

import { FaUsers } from "react-icons/fa";
const { Card } = antd;

const Graph = () => {
  return (
    <div className="graph_page">
      <Card className="card">
        <div className="card_icon">
          <FaUsers />
        </div>
        <span>5,660,000 IQD</span>
        <div className="card_footer">
          <p>Expenses in December</p>
        </div>
      </Card>
    </div>
  );
};

export default Graph;
