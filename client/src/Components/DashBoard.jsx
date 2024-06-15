import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./dashboard.css";
import Dashcard from "./DashboardLinls/Dashcard";

const renderFrom = [1, 2, 3, 4, 5, 6, 7, 8];

const Dashboard = () => {
	const { logout } = useAuth0();
	return (
		<div className="baap">
			<div className="full">
				{renderFrom.map((item, index) => {
					return <Dashcard key={index} index={index + 1} />;
				})}
			</div>
			<button
				onClick={() =>
					logout({ logoutParams: { returnTo: window.location.origin } })
				}
			>
				Log Out
			</button>
		</div>
	);
};

export default Dashboard;
