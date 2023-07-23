import React from "react";
import { Link } from "react-router-dom";

function First() {
	return (
		<>
			<section className="first-hightlight-wrapper">
				<div className="container">
					{/* <div className="new-alert">New</div> */}

					<div className="title-wraper bold black">MacBook Air 15" </div>
					<div className="description-wrapper black">
						impressively big. impossibly thin.
					</div>

					<div className="links-wrapper">
						<ul>
							<li>
								<Link href="/">Learn more</Link>
							</li>
							<li>
								<Link href="/">Order</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default First;
