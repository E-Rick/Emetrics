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
