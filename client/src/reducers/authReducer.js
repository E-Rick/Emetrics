import { FETCH_USER } from '../actions/types';

/** 
	@desc authReducer.js is a reducer that records whether or not the user is logged in
		3 different states are returned:
			1. null - the default case to indicate we are waiting for our fetch_user action ajax request
				to return. (waiting for request)
			2. action.payload - the payload contains the google/facebook/github profile. (user is logged in)
			3. false - the fetch_user action.payload returned '' a falsey value. (user not logged in) 
	@param object state - sets up the initial state to null indicating we are waiting for 
		the fetch_user ajax request to return something
  @param object action - 
*/
export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}
