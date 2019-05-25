import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class StripeWrapper extends Component {
	render() {
		return (
			<StripeCheckout
				name='Emetrics' // the pop-in header title
				description='$5 for 5 email credits' // the pop-in header sub-title
				amount={500} // cents
				currency='USD'
				token={token => this.props.handleToken(token)} // submit callback action creator
				stripeKey={process.env.REACT_APP_STRIPE_KEY}>
				<button className='btn'>Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(StripeWrapper);
