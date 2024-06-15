import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain="dev-u5gxbr7lttvi8uf2.us.auth0.com"
				clientId="MVQtXZMLpL2xA26pyUK5n9nuYgZa5XbJ"
				authorizationParams={{
					redirect_uri: "http://localhost:3000/dashboard",
				}}
				onRedirectCallback={(appState) => {
					const targetUrl = appState?.returnTo || window.location.pathname;
					window.history.replaceState({}, document.title, targetUrl);
				}}
			>
				<App />
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
);
