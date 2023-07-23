// import TvLogo from "../images/icons/apple-tv-logo.png";
// import Banker from "../images/home/banker.png";
import { Link } from "react-router-dom";
import Arcade from "../images/icons/arcade.png";

import React from "react";

function SectionTwo() {
	return (
		<>
			<section className="fifth-heghlight-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								<div className="top-logo-wrapper">
									{/* <div className="logo-wrapper">
										<img src={TvLogo} alt="" />
									</div> */}
									<div className="title-wraper">iphone 14</div>
									<div className="description-wraper">Wonderful.</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<Link to="/">Learn more</Link>
											</li>
											<li>
												<Link to="/">Buy</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="tvshow-logo-wraper">
									<img src="/" alt="" />
								</div>

								<div className="watch-more-wrapper">
									<Link to="/">Watch now on the Apple TV App</Link>
								</div>
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={Arcade} alt="" />
									</div>
								</div>
								<div className="description-wraper">
									With the Always-On Retina display.
									<br />
									You’ve never seen a watch like this.
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to="/">Learn more</Link>
										</li>
										<li>
											<Link to="/">Buy</Link>
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

export default SectionTwo;
