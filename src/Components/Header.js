import NavLink from "./navigation";
import logoSm from "../images/icons/logo-sm.png";
import searchIco from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
import { Component } from "react";
class Header extends Component {
	render() {
		return (
			<section1>
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button
								className="navbar-toggler navbar-toggler-right"
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse">
								☰
							</button>
							<a className="navbar-brand mx-auto" href="/">
								<img src={logoSm} alt="" />
							</a>
							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<NavLink link="/mac" linkName="Mac" />
									<NavLink link="/iphone" linkName="iphone" />
									<NavLink link="/ipad" linkName="ipad" />
									<NavLink link="/watch" linkName="Watch" />
									<NavLink link="/tv" linkName="TV" />
									<NavLink link="/music" linkName="Music" />
									<NavLink link="/support" linkName="Support" />
									<li className="nav-item">
										<a className="nav-link js-scroll-trigger" href="/search/">
											<img src={searchIco} alt="" />
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link js-scroll-trigger" href="/cart/">
											<img src={cart} alt="" />
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>

				<section className="alert-section top-50">
					<div className="container">
						<div className="alert-title">We’re open for you.</div>
						<div className="alert-text">
							Our retail stores are closed, but you can buy our products here
							online and get fast, free delivery. If you need help finding the
							right product or have a question on your order, chat online with a
							Specialist or call 1-800-MY-APPLE.
							<br />
							For service and Support, visit{" "}
							<a href="https://support.apple.com/">support.apple.com</a>.
						</div>
					</div>
				</section>
			</section1>
		);
	}
}

export default Header;
