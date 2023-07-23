import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import logo from "../images/icons/logo-sm.png";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
// import logo2 from "../images/icons/apple-logo.png";
// import search2 from "../images/icons/search-interface-symbol.png";
// import cart2 from "../images/icons/shopping-bag.png";
// import $ from "jquery";

function NavHead() {
	let [Clicked, setClicked] = useState(false);

	function handeleClick() {
		setClicked(!Clicked);
	}
	return (
		<>
			<header className="header-sticky container-fluid">
				<div id="responsive">
					<div id="logo">
						<Link to="/">
							<img src={logo} alt="Apple-logo" />
						</Link>
					</div>
					<div id="search">
						<Link to="/search">
							<img src={search} alt="search-icon" />
						</Link>
					</div>
					<div id="cart">
						<Link to="/cart">
							<img src={cart} alt="cart-icon" />
						</Link>
					</div>
					<div id="Toggler" onClick={handeleClick}>
						<i className={Clicked ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
				<nav
					id="navigation"
					className={Clicked ? "#navigation active" : "#navigation"}>
					<ul>
						<li id="dis-lef">
							<Link to="/">
								<img src={logo} alt="Apple-logo" />
							</Link>
						</li>

						<li id="hidden">
							<Link to="/store">Store</Link>
						</li>
						<li id="hidden">
							<Link to="/mac">Mac</Link>
						</li>
						<li id="hidden">
							<Link to="/ipad">ipad</Link>
						</li>
						<li id="hidden">
							<Link to="/iphone">iphone</Link>
						</li>
						<li id="hidden">
							<Link to="/watch">Watch</Link>
						</li>
						<li id="hidden">
							<Link to="/AirPods">AirPods</Link>
						</li>
						<li id="hidden">
							<Link to="/TVAndHome">TV & Home</Link>
						</li>
						<li id="hidden">
							<Link to="/Entertainment">Entertainment</Link>
						</li>
						<li id="hidden">
							<Link to="/Accessories">Accessories</Link>
						</li>
						<li id="hidden">
							<Link to="/Support">Support</Link>
						</li>
						<li id="dis-lef">
							<Link to="/search">
								<img src={search} alt="search-icon" />
							</Link>
						</li>
						<li id="dis-lef">
							<Link to="/Cart">
								<img src={cart} alt="cart-icon" />
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<span className="credit container-fluid">
				<div>
					Get $200–$570 in credit toward an iPhone 14 when you trade in an
					iPhone 11 or newer.<sup>1</sup> <Link to="/">Shop iphone</Link>
				</div>
			</span>
		</>
	);
}

export default NavHead;
