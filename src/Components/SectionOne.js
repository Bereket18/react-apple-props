import React from "react";
import { Link } from "react-router-dom";
import Watch from "../images/icons/promo_logo_apple_watch_series_8.png";
import Vision from "../images/icons/promo_logo_apple_vision_pro__90zi46p7dc2y_small.png";

function SectionOne() {
	return (
		<>
			<section className="fourth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="logo-wrapper">
									<img src={Watch} alt="" />
								</div>
								{/* <div className="title-wraper">Watch Series 8</div> */}
								<div className="description-wraper">A healthy leap ahead</div>
								{/* <div className="price-wrapper">
									From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
								</div> */}

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
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="logo-wrapper">
									<img src={Vision} alt="" />
								</div>
								<div className="description-wraper">
									Welcome to the era of spatial computing.
								</div>
								<div className="description-wraper">
									Available early next year in the U.S.
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to="/">Learn more</Link>
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

export default SectionOne;
