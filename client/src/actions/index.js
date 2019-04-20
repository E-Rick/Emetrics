import axios from 'axios';
import { FETCH_USER } from './types';

/* 
  @desc declares the fetchUser action creator of type FETCH_USER and dispatches the action object
  containing the action type and payload from the axios response to the reducer authReducer.js
*/
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user'); // get response from back end server
	dispatch({ type: FETCH_USER, payload: res.data }); //dispatch response data
};

/* 
  @desc declares the handleToken action creator that sends the Stripe token returned from User 
  submitting a payment to our back-end API updating the User model with the updated credits amount
  @param token - Stripe token from StripeCheckout component
*/
export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token); // response containing updated user model
	dispatch({ type: FETCH_USER, payload: res.data }); //dispatch response data
};
