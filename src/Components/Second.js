import React from "react";
import { Link } from "react-router-dom";

function Second() {
	return (
		<>
			<section className="second-hightlight-wrapper">
				<div className="container">
					<div className="new-alert">New</div>

					<div className="title-wraper bold black">MacBook Air</div>

					<div className="description-wrapper black">
						Twice the speed. Twice the storage.
					</div>

					<div className="price-wrapper grey">From $999.</div>

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

export default Second;
