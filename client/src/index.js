import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

/*
  @desc calls createStore() from redux library to create redux store  
  @param function reducers - pass the all the reducers combined from ./reducers directory's index.js
  @param object {} - sets up the initial state of the app (we leave null because no setup needed)
                     this param is more relevant for server-side rendering
  @param function applyMiddleWare() - invokes redux helper to hookup middlewares  
*/
const store = createStore(reducers, {}, applyMiddleware());

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
