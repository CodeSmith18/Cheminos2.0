import React from "react";
import "./dashboard.css";
import Dashcard from "./DashboardLinls/Dashcard";

const renderFrom =  [1,2,3,4,5,6];
   


const Dashboard = () => {
    return (
        <div className="full">
            {renderFrom.map((item, index) => {
                return (
                    <Dashcard key={index} /> 
                );
            })}
        </div>
    );
};

export default Dashboard;
