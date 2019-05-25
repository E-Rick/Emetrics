import React, { Component } from 'react';
/** 
 * @param BrowserRouter - react component that is the brains of react-router and tells it how
 * to behave. It looks at the current url and changes a set of components that are visible at any time
 * @param Route - react component that is used to setup a rule between a certain route that the user
 * might visit  and a set of components that will be actually visible
 */
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // gives certain components ability to call action creators
import * as actions from '../actions'; //import action creators and assign them to the obj actions
import Header from './layout/Header';
import Landing from './layout/Landing';
import Dashboard from './dashboard/Dashboard';
import SurveyNew from './surveys/SurveyNew';

import '../stylesheets/header.scss';
import '../stylesheets/variables.scss';
import '../stylesheets/landing.scss';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser(); // fetchUser action creator
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route exact path='/' component={Landing} />
					<Route exact path='/surveys' component={Dashboard} />
					<Route path='/surveys/new' component={SurveyNew} />
				</BrowserRouter>
			</div>
		);
	}
}

/**
 * @arg null - map state to props arguments or map state to props function
 * @arg actions - all the different action creators that are assigned to the App component as props
 */
export default connect(null, actions)(App);
