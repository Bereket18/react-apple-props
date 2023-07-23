// import Arcade from "../images/icons/arcade.png";
import { Link } from "react-router-dom";
import React from "react";

function SectionThree() {
	return (
		<>
			<section className="sixth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									{/* <div className="logo-wrapper">
										<img src={Arcade} alt="" />
									</div> */}
								</div>
								<div className="title-wraper">MacBook Air 15' </div>
								<div className="description-wraper">
									Impressively big.Impossibly Thin.
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to="/">Learn More</Link>
										</li>
										<li>
											<Link to="/">Buy</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="title-wraper">
									Apple Card Monthly Installments
								</div>
								<div className="description-wraper">
									Pay for your next iPhone over time, interest-free with Apple
									Card.
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to="/">Learn more</Link>
										</li>
										<li>
											<Link to="/">Apply now</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SectionThree;
