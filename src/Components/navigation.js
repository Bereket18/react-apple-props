import React, { Component } from "react";

class navLink extends Component {
	render() {
		return (
			<div>
				<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href={this.props.link}>
						{this.props.linkName}
					</a>
				</li>
			</div>
		);
	}
}

export default navLink;
