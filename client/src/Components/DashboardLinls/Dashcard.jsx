import React from "react";
import "./Dashcard.css";
const Dashcard = ({index}) => {

	return (
		<div className="cc">
			<div class="container">
				<div class="card">
					<div class="box">
						<div class="content">
							<h2>{index}</h2>
							<h3>Card One</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
								totam velit? Iure nemo labore inventore?
							</p>
							<a>Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashcard;
