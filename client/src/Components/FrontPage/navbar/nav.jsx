import React from "react";
import "./nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";
function Nav() {
	const { user, loginWithRedirect, isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	if (isAuthenticated) {
		console.log(user);
	}
	function tel() {
		navigate("/login");
	}
	return (
		<nav className="navbar">
			<div className="navbar-container container">
				<input type="checkbox" id="menu-toggle" />
				<div className="hamburger-lines">
					<span className="line line1"></span>
					<span className="line line2"></span>
					<span className="line line3"></span>
				</div>
				<ul className="menu-items">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<NavLink to="/login">
							<button className="login" onClick={() => loginWithRedirect()}>
								Login
							</button>
						</NavLink>
					</li>
				</ul>
				<div>
					<h1 className="logo">Cheminos</h1>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
