import React from "react";
import { Link } from "react-router-dom";

function AirPods() {
	const link = "https://www.apple.com/airpods/";
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12 mt-5">
							<h1 className="font-weight-bold">
								Toggle The button to go to the Page <br />
								<button
									type="submit"
									class="btn btn-dark text-decoration-none"
									id="newFormBtn">
									<Link to={link}>AirPods</Link>
								</button>
							</h1>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AirPods;
