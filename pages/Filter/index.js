import { Button } from "antd";
import antd from "antd";
import { Layout, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";
import "../../Styles/Filter.less";
import { RightOutlined } from "@ant-design/icons";
const { Card } = antd;
const { Meta } = Card;

const fitlerImtes = [
  { title: "Wearables" },
  { title: "Hoodle" },
  { title: "Male T-shirt" },
  { title: "Female T-shirt" },
  { title: "Kids" },
  { title: "Dresses" },
  { title: "Skrits" },
];
const items = [
  {
    id: "1",
    src: "../static/images/t.jfif",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "2",
    src: "../static/images/t.jfif",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "3",
    src: "../static/images/t.jfif",
    size: "L",
    title: "Baghdad",
    color: "White",
  },
  {
    id: "4",
    src: "../static/images/t.jfif",
    size: "S",
    title: "WonderWomen",
    color: "Black",
  },
  {
    id: "5",
    src: "../static/images/t.jfif",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "6",
    src: "../static/images/t.jfif",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
  {
    id: "7",
    src: "../static/images/t.jfif",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "8",
    src: "../static/images/t.jfif",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "9",
    src: "../static/images/t.jfif",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
];

function Filter() {
  const [currentItem, setCurrentItem] = useState(1);
  const [itemperClick, setItemClick] = useState(5);
  const prevItem = () => {
    if (currentItem > 1) {
      setCurrentItem(currentItem - 1);
    }
  };

  const totalItem = Math.ceil(fitlerImtes.length / itemperClick);

  const nextItem = () => {
    if (currentItem != totalItem) {
      setCurrentItem(currentItem + 1);
    }
  };
  let lastIndex = currentItem * itemperClick;
  let firstIndex = lastIndex - itemperClick;

  console.log(
    "current",
    +firstIndex + " * " + lastIndex
    // itemperPage + " -" + lastIndex
  );
  return (
    <div className="filter_page">
      <div className="filter_head">
        {currentItem === 1 ? null : (
          <div className="fa_wrapper1" onClick={prevItem}>
            <FaLessThan color="rgb(189, 186, 186)" size="20" />
          </div>
        )}

        {fitlerImtes.slice(firstIndex, lastIndex).map((item, i) => {
          return (
            <Button
              key={i}
              size="large"
              type={i === 0 ? "primary" : ""}
              style={{
                padding: "5px 40px",
                // backgroundColor: i === 0 ? " #4d91ff" : "",
                fontWeight: "500",
                // color: i === 0 ? "white" : "rgb(189, 186, 186)",
              }}
            >
              {item.title}
            </Button>
          );
        })}
        {currentItem === totalItem ? null : (
          <div className="fa_wrapper2" onClick={nextItem}>
            <RightOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        )}
      </div>
      <div className="card_wrapper">
        {items.map((item, i) => {
          return (
            <Card
              hoverable
              key={i}
              style={{
                overflow: "hidden",
                width: "100%",
                flex: "none",
                borderRadius: 5,
                height: "auto",
              }}
              cover={
                <img
                  alt="item"
                  width="100%"
                  display="block"
                  border-radius="30px"
                  height="auto"
                  object-fit="cover"
                  src={item.src}
                />
              }
            >
              <Meta title={item.title} />
              <div className="item_footer">
                <p>{item.color} </p> <span>{item.size}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
