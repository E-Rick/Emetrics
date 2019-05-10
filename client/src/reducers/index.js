import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

/**
 * @desc exports combineReducers() invocation from redux that 
 * @param object {} - contains the keys that represent the reducers inside of our state object 
 */
export default combineReducers({
	auth    : authReducer, // auth state is being produced or manufactured by the authReducer
	form    : formReducer, // redux-form reducer
	surveys : surveysReducer // survey state is being produced or manufactured by the surveysReducer
});
