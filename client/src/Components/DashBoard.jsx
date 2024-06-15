import React from "react";
import "./dashboard.css";
import Dashcard from "./DashboardLinls/Dashcard";

const renderFrom = [1, 2, 3, 4, 5, 6, 7, 8];

const Dashboard = () => {
  return (
    <div className="baap">
      <div className="full">
        {renderFrom.map((item, index) => {
          return <Dashcard key={index} index={index+1} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
