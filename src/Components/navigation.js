import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
	render() {
		return (
			<li className="nav-item">
				<Link className="nav-link js-scroll-trigger" to={this.props.link}>
					{this.props.linkName}
				</Link>
			</li>
		);
	}
}

export default NavLink;
