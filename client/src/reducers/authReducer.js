/* 
  @desc authReducer.js is a reducer that records whether or not the user is logged in
  @param object state - sets up the initial state (none needed right now)
  @param object action - 
*/
export default function(state = {}, action) {
	switch (action.type) {
		// default action no change to state just return state object
		default:
			return state;
	}
}
