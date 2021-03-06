import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import "./ItemsChart.css";

function ItemsChart() {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <div className='donut'>
      <Chart
        options={{
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {},
                  value: {},
                },
              },
            },
          },
          dataLabels: {
            enabled: true,
          },
          labels: ["A", "B", "C", "D", "E"],
        }}
        series={[44, 55, 41, 17, 15]}
        type='donut'
        width={width > 500 ? "350" : "280"}
      />
    </div>
  );
}

export default ItemsChart;
