import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<a href='/' className='left brand-logo'>
						Emetrics
					</a>
					<ul id='nav-mobile' className='right'>
						<li>
							<a href='/auth/google'>Login With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
