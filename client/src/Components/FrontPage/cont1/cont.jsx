import React from "react";
import "./cont.css";
import i from "./laptop.png";
function Cont() {
	return (
		<div className="main">
			<div className="heading_text">
				Lorem ipsum dolor sit amet. Hic omnis quae quae qui beatae dolores est
				omnis.
			</div>
			<div className="subheading">
				"Lorem ipsum dolor sit amet. Sit reprehenderit similique non soluta
	@@ -33,6 +33,44 @@ function Cont() {
					</div>
				</div>
			</div>

			<footer id="footer">
				<div class="col col1">
					<h3>
						Cheminos
					</h3>
    					<p class="team">
						Made with <span id="made">❤</span> by Team Cheminos
					</p>
					<div class="social">
      						<a href="https://codepen.io/Juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
      						<a href="https://twitter.com/juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
      						<a href="https://youtube.com/@juxtopposed" target="_blank" class="link"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
    					</div>
				</div>

				<br />

				<div class="col col2">
    					<p><a>About</a></p>
    					<p><a>Our mission</a></p>
    					<p><a>Privacy Policy</a></p>
    					<p><a>Terms of service</a></p>
  				</div>

				<br />

  				<div class="col col3">
    					<p><a>Services</a></p>
    					<p><a>Products</a></p>
    					<p><a>Join our team</a></p>
    					<p><a>Partner with us</a></p>
  				</div>

  				<div class="backdrop"></div>
			</footer>
			<p class="cpright">2024 © All Right Reserved</p>

		</div>
	);
}
export default Cont;
