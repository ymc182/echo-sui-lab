import React from "react";
import { Link } from "react-router-dom";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import "./Home.scss";
export default function Home() {
	return (
		<div className="app_home">
			<div className="app_home-main">
				<img src="/ECHO-dark.png" alt="ECHO" width={200} />
				<br />
				<Link to="/application">
					<button>Apply in 30 sec</button>
				</Link>
			</div>
			<div className="app_home-info">
				<h1>How this work</h1>
				<i>
					A simple & secure way for people to get <span>access</span> to the most <span>exciting mints</span>- based on
					merit.
				</i>
				<div className="app_home-info-steps">
					<div className="app_home-info-steps-step">
						<img src={step1} alt="Step 1" />
						<i>Connect your wallet</i>
					</div>
					<div className="app_home-info-steps-step">
						<img src={step2} alt="Step 2" />
						<i>Verify your profile </i>
					</div>
					<div className="app_home-info-steps-step">
						<img src={step3} alt="Step 3" />
						<i>Answer some question</i>
					</div>
				</div>
			</div>
		</div>
	);
}
