import React, { Component } from "react";

class Main extends Component {
	render() {
		return (
			<sec>
				<section class="first-hightlight-wrapper">
					<div class="container">
						<div class="new-alert">New</div>

						<div class="title-wraper bold black">iPad Pro</div>

						<div class="links-wrapper">
							<ul>
								<li>
									<a href="/">Learn more</a>
								</li>
								<li>
									<a href="/">Order</a>
								</li>
							</ul>
						</div>

						<div class="ipod-caption row">
							<div class="col-sm-12 col-md-6 text-md-right">
								iPad Pro available starting 3.25
							</div>
							<div class="col-sm-12 col-md-6 text-md-left">
								Magic Keyboard coming in May
							</div>
						</div>
					</div>
				</section>

				<section class="second-hightlight-wrapper">
					<div class="container">
						<div class="new-alert">New</div>

						<div class="title-wraper bold black">MacBook Air</div>

						<div class="description-wrapper black">
							Twice the speed. Twice the storage.
						</div>

						<div class="price-wrapper grey">From $999.</div>

						<div class="links-wrapper">
							<ul>
								<li>
									<a href="/">Learn more</a>
								</li>
								<li>
									<a href="/">Buy</a>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="third-hightlight-wrapper">
					<div class="container">
						<div class="title-wraper bold">iPhone 11 Pro</div>

						<div class="description-wrapper">
							Pro cameras. Pro display. Pro performance.
						</div>

						<div class="price-wrapper">
							From $24.95/mo. or $599 with trade‑in.
						</div>

						<div class="links-wrapper">
							<ul>
								<li>
									<a href="/">Learn more</a>
								</li>
								<li>
									<a href="/">Buy</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</sec>
		);
	}
}

export default Main;
