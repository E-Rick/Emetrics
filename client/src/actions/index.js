import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

/**
 * @desc declares the fetchUser action creator of type FETCH_USER and dispatches the action object
 * containing the action type and payload from the axios response to the reducer authReducer.js
 */
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/user'); // get response from back end server
	dispatch({ type: FETCH_USER, payload: res.data }); //dispatch response data
};

/**
 * @desc declares the handleToken action creator that sends the Stripe token returned from User
 * submitting a payment to our back-end API updating the User model with the updated credits amount
 * @param token - Stripe token from StripeCheckout component
 */
export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token); // response containing updated user model
	dispatch({ type: FETCH_USER, payload: res.data }); //dispatch response data
};

/**
 * @desc declares submitSurvey action creator that posts the survey to back-end API
 * and then dispatches a FETCH_USER action to update the header with new User credits data
 * @param {*} values survey form values from SurveyForm
 * @param {*} history 
 */
export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys', values); // response containing updated user model
	history.push('/surveys'); // redirect to /surveys after survey submit
	dispatch({ type: FETCH_USER, payload: res.data }); //dispatch response data
};

/**
 * @desc declares the fetchSurveys action creator that gets an array of surveys for the current 
 * user from the back-end API and then dispatches a FETCH_SURVEYS action with the survey 
 * array in res.data
 */
export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
