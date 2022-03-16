import React from "react";
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
  return (
    <div className='chart'>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: newSetOfMonths,
          },
        }}
        series={[
          {
            name: "sales",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 45],
          },
        ]}
        type='line'
        width='280'
      />
    </div>
  );
}

export default SalesChart;
