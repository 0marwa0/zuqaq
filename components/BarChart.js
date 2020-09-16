import React from "react";
import { Line, Doughnut,Bar } from "react-chartjs-2";

const data = {
  
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      legend:false,
      
       backgroundColor: [
        "blue",
        "red",
        "#FFCE56",
        "#3366cc"
      ],
      border:false,
      // borderColor: "rgba(75,192,192,1)",
      // borderCapStyle: "butt",
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81],
    }
  ]
};
export const Dunt=()=>{
  return   <Doughnut data={data} width={200} height={135} options={{
                                      title: {
                                    display: false,
                                      fontSize: 10
                                      },

 elements: {
      center: {
        text: 'Red is 2/3 of ',
        color: 'red', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: "3px", // Default is 20 (as a percentage)
        minFontSize: "14px", // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: "2px" // Default is 25 (in px), used for when text wraps
      }}
,
 responsive: true,
                           
                                      
                                     maintainAspectRatio: true,
                                     legend: {
                                     display:false,
                                     position: "left",
                                     backgroundColor:"red"
                                      },
                                      cutoutPercentage: 80
                                     }}
    />
}
export const Bars =()=>{
  return  <Bar data={data} width={250} height={132}
  
  options={{
       scales: {
          xAxes: [{
            display: true, gridLines: {
                drawOnChartArea: false
            },
            
          }],
          yAxes: [{
            type: "linear",
            display: true,
            gridLines: {
                drawOnChartArea: false
            },
            position: "left"
          }]
        },
        responsive: true,
                                      title: {
                                    display: true,
                                      fontSize: 10
                                      },
                                     maintainAspectRatio: true,
                                     legend: {
                                     display:false,
                                     position: "left",
                                     backgroundColor:"red"
                                      },
                                      cutoutPercentage: 80
                                     }}
    />
}
export default class Hello extends React.Component {
  render() {
    return (
      <div >
        
      
   
      </div>
    );
  }
}