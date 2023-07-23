import React from "react";
import { Link } from "react-router-dom";

function Third() {
	return (
		<>
			<section className="third-hightlight-wrapper">
				<div className="container">
					<div className="title-wraper bold">iPhone 13 Pro</div>

					<div className="description-wrapper">Pro. Beyond.</div>

					{/* <div className="price-wrapper">
						From $24.95/mo. or $599 with trade‑in.
					</div> */}

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
			</section>
		</>
	);
}

export default Third;
