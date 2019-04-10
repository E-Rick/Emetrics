import { combineReducers } from 'redux';
import authReducer from './authReducer';

/* 
  @desc exports combineReducers() invocation from redux that 
  @param object {} - contains the keys that represent the keys inside of our state object
*/
export default combineReducers({
	auth : authReducer //auth state is being produced or manufactured by the authReducer
});
