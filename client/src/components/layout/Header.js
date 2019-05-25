import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // specific router library for browser dom and not native
import StripeWrapper from '../stripe/StripeWrapper';
class Header extends Component {
	// @desc helper method that inspects the this.props.auth property and returns jsx depending on return
	renderContent() {
		switch (this.props.auth) {
			case null: //waiting for response
				return;
			case false: //the user is not logged in
				return [
					<li>
						<a href='/auth/google'>Login With Google</a>
					</li>,
					<li>
						<a href='/auth/facebook'>Login With Facebook</a>
					</li>
				];
			//when the user is logged in
			default:
				return [
					<li key='1'>
						<StripeWrapper />
					</li>,
					<li key='2' style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key='3'>
						<a href='/api/user/logout'>Logout</a>
					</li>,
					<li key='4'>
						<img id='avatar' className='circle' src={this.props.auth.avatar} alt={this.props.auth.name} />
					</li>
				];
		}
	}

	render() {
		// console.log(this.props);
		return (
			<nav>
				<div className='nav-wrapper container'>
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
