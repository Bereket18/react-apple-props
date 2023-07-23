import React from "react";
import { Link } from "react-router-dom";

function Cart() {
	const link =
		"https://www.1AAABiXxoXgog7TTyEbpf4mDZ4o4RRPyTnQyePH8aYW5_RC6gFCM89PUAAAAgaHR0cHM6Ly93d3cuYXBwbGUuY29tL3Nob3AvYmFnfHwAAgFlZS4tVzRJ4AC798LEsBChXzopeWzqjai38jjxnuQoyg.com/cart/";
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12 mt-5">
							<h1 className="font-weight-bold">
								Toggle The button to go to the Page <br />
								<button type="submit" class="btn btn-dark" id="newFormBtn">
									<Link to={link}>Cart</Link>
								</button>
							</h1>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Cart;
