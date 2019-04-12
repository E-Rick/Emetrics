import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // specific router library for browser dom and not native

class Header extends Component {
	// @desc helper method that inspects the this.props.auth property and returns jsx depending on return
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/google'>Login With Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href='/api/logout'>Logout</a>
					</li>
				);
		}
	}

	render() {
		console.log(this.props);
		return (
			<nav>
				<div className='nav-wrapper'>
					{/* If user is logged in redirect to /surveys or landing if not logged in */}
					<Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo'>
						Emetrics
					</Link>
					<ul id='nav-mobile' className='right'>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
