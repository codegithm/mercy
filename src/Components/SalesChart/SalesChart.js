import React from "react";
import Chart from "react-apexcharts";
import "./SalesChart.css";

function SalesChart() {
  return (
    <div className='chart'>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        }}
        series={[
          {
            name: "sales",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ]}
        type='line'
        width='280'
      />
    </div>
  );
}

export default SalesChart;
