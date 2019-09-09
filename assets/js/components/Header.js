import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	// async test() {}
	render() {
		return (
			<header>
				<div className="logo">Logo</div>
				<nav>
					<a href="#">create ads</a>
					<a href="#">About us</a>
					<a href="#">log in</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
