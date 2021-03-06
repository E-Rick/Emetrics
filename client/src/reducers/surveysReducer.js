import { FETCH_SURVEYS } from '../actions/types';

// set the state initial state to an empty array of surveys
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_SURVEYS:
			return action.payload;
		default:
			return state;
	}
}
