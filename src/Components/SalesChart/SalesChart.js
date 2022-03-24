import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import "./SalesChart.css";

function SalesChart() {
  let currMonths = new Date().getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let newSetOfMonths = months.slice(currMonths);
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <div className='chart'>
      <ReactApexChart
        options={{
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: newSetOfMonths,
          },
          title: {
            text: "Sales chart",
            align: "left",
          },
          stroke: {
            curve: "straight",
          },
          subtitle: {
            text: "Price Movements",
            align: "left",
          },
          dataLabels: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        }}
        series={[
          {
            name: "sales",
            data: [30, 40, 45, 50, 469, 60, 70, 91, 65, 445],
          },
        ]}
        type='area'
        width={width > 500 ? "350" : "280"}
      />
    </div>
  );
}

export default SalesChart;
