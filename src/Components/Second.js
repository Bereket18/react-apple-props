import React from "react";
import { Link } from "react-router-dom";

function Second() {
	return (
		<>
			<section className="second-hightlight-wrapper">
				<div className="container">
					<div className="new-alert">New</div>

					<div className="title-wraper bold white">MacBook Air</div>

					<div className="description-wrapper white">
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
