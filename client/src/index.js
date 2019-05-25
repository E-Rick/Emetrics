import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Development only axios helpers
import axios from 'axios';
window.axios = axios;

/*
  @desc calls createStore() from redux library to create redux store  
  @param function reducers - pass the all the reducers combined from ./reducers directory's index.js
  @param object {} - sets up the initial state of the app (we leave null because no setup needed)
                     this param is more relevant for server-side rendering
  @param function applyMiddleWare() - invokes redux helper to hookup middle-wares
  * @param reduxThunk - middleware to allow for async logic to interacts with the store,
                        like simply async AJAX requests and complex synchronous logic
*/
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/* 
  @desc Sets up Provider component that reads changes from the redux store and any time the 
    redux store gets new states produced inside of it the Provider then informs and updates 
    all of its child components with the new states.
  @param <Provider></Provider> - react-redux component to contain the App component and redux store
  @props store - pass in the redux store object  
  @param document.querySelector() - selects the #root element in the index.html to render the ReactDOM
*/
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
