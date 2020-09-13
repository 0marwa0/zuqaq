import { Button } from "antd";
import antd from "antd";

import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";
import "../../Styles/Filter.less";
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
    src: "../static/images/Teshert.webp",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "2",
    src: "../static/images/Teshert.webp",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "3",
    src: "../static/images/Teshert.webp",
    size: "L",
    title: "Baghdad",
    color: "White",
  },
  {
    id: "4",
    src: "../static/images/Teshert.webp",
    size: "S",
    title: "WonderWomen",
    color: "Black",
  },
  {
    id: "5",
    src: "../static/images/Teshert.webp",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "6",
    src: "../static/images/Teshert.webp",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
  {
    id: "7",
    src: "../static/images/Teshert.webp",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "8",
    src: "../static/images/Teshert.webp",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "9",
    src: "../static/images/Teshert.webp",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
];

function Filter() {
  const [currentItem, setCurrentItem] = useState(1);
  const [itemperClick, setItemClick] = useState(4);
  const prevItem = () => {
    if (currentItem > 1) {
      setCurrentItem(currentItem - 1);
    }
  };

  const nextItem = () => {
    const totalItem = Math.ceil(fitlerImtes.length / itemperClick);
    if (currentItem != totalItem) {
      setCurrentItem(currentItem - 1);
    }
  };
  let lastIndex = currentItem * itemperClick;
  let firstIndex = lastIndex - itemperClick;

  // let current = props.item.slice(firstIndex, lastIndex);
  // const totalPge = Math.ceil(props.item.length / itemperPage);
  console.log(
    "current",
    +firstIndex + " * " + lastIndex
    // itemperPage + " -" + lastIndex
  );
  return (
    <div className="filter_page">
      <div className="filter_head">
        {/* <div className="fa_wrapper1">
          <FaLessThan color="rgb(189, 186, 186)" size="20" />
        </div> */}
        {fitlerImtes.slice(0, 5).map((item, i) => {
          return (
            <Button
              size="large"
              style={{
                padding: "5px 40px",
                backgroundColor: i === 0 ? " #4d91ff" : "",
                fontWeight: "500",
                color: i === 0 ? "white" : "rgb(189, 186, 186)",
              }}
            >
              {item.title}
            </Button>
          );
        })}

        <div className="fa_wrapper2">
          <FaGreaterThan color="rgb(189, 186, 186)" size="20" />
        </div>
      </div>
      <div className="card_wrapper">
        {items.map((item) => {
          return (
            <Card
              hoverable
              style={{
                overflow: "hidden",
                width: 250,
                borderRadius: 5,
                height: 200,
              }}
              cover={
                <img
                  alt="item"
                  width="100%"
                  display="block"
                  borderRadius="30px"
                  height="120px"
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
