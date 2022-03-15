import React from "react";
import "./Insights.css";
import DashboardCard from "../DashboardCard/DashboardCard";

function Insights() {
  return (
    <div className='insights-cont'>
      <div className='row'>
        <div className='col-12'>
          <h2>Insights</h2>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Total income' figures='R 9000' name='income' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Overall sales' figures='9000' name='sales' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 insights-card'>
          <DashboardCard title='Monthly sales' figures='R900' name='monthly' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <DashboardCard title='Items returned' figures='9' name='returned' />
        </div>
      </div>
    </div>
  );
}

export default Insights;
