import React from "react";
import "./Insights.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import SalesChart from "../SalesChart/SalesChart";
import ItemsChart from "../ItemsChart/ItemsChart";

function Insights() {
  return (
    <div className='insights-cont'>
      <div className='row'>
        <div className='col-12'>
          <h2>Insights</h2>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Total income' subtitle='R 9000' name='income' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Overall sales' subtitle='9000' name='sales' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Monthly sales' subtitle='R900' name='monthly' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <DashboardCard title='Items returned' subtitle='9' name='returned' />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <SalesChart />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <ItemsChart />
        </div>
      </div>
    </div>
  );
}

export default Insights;
