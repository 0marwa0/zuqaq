import { useState } from "react";
import Expanses from "./Expanses.js";
import { Button } from "antd";
import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import { AiOutlineLineChart } from "react-icons/ai";
import ChartContent from "../components/ChartContent";
function SlideNav(props) {
  const [Trans, setTrans] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [expenses, setExpnses] = useState(true);
  const [discounts, setDiscounts] = useState(false);

  const showTran = () => {
    props.fun();
    setTrans(true);
    setPurchase(false);
    setDiscounts(false);
    setExpnses(false);
  };
  const showPurchase = () => {
    props.fun();
    setPurchase(true);
    setTrans(false);
    setDiscounts(false);
    setExpnses(false);
  };
  const showDiscounts = () => {
    props.fun();
    setDiscounts(true);
    setPurchase(false);
    setTrans(false);
    setExpnses(false);
  };
  const showExpenses = () => {
    props.fun();
    setExpnses(true);
    setPurchase(false);
    setDiscounts(false);
    setTrans(false);
  };
  const Content = () => {
    switch (true) {
      case Trans === true:
        return <p className="content">Transactions</p>;
        break;
      case purchase === true:
        return <p className="content">purchase</p>;
        break;
      case discounts === true:
        return <p className="content">discounts</p>;
        break;
      case expenses === true:
        return (
          <>
            <Expanses />
          </>
        );
        break;
      default:
        break;
    }
    return <p></p>;
  };
  return (
    <div>
      <div className="slideNav">
        <div className="slide_head">
          <div className="slide_icon" >
            < AiOutlineLineChart size="27" />
          </div>
          <p style={{marginLeft:"7px"}}>Dashbord</p>
        </div>

        <ul>
          <li onClick={showTran} className= "active" >
            Analytics
          </li>
         
        </ul>
      </div>
      <div>
        <ChartContent />
      </div>
    </div>
  );
}

export default SlideNav;
