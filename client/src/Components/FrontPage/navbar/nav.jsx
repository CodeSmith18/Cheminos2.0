import React from "react";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
function Nav() {
	const navigate = useNavigate();
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
				<div>
					<h1 className="logo">Cheminos</h1>
				</div>
				<center>
				<ul className="menu-items">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Courses</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
					<li>
						<a href="#">Contact Us</a>
					</li>
				</ul>
				</center>
				<div>
				<NavLink to="/login">
							<button className="login" onClick={tel}>
								Login
							</button>
				</NavLink>
				</div>
				
			</div>
		</nav>
	);
}
export default Nav;
