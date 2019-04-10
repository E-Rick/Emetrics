import React, { Component } from 'react';
/* 
	@param BrowserRouter - react component that is the brains of react-router and tells it how
		to behave. It looks at the current url and changes a set of components that are visible at any time
	@param Route - react component that is used to setup a rule between a certain route that the user
		might visit  and a set of components that will be actually visible
*/
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // gives certain components ability to call action creators
import * as actions from '../actions'; //import action creators and assign them to the obj actions
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser(); // fetchUser action creator
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className='container'>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route path='/surveys/new' component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

/* 
	@arg null - map state to props arguments or map state to props function
	@arg actions - all the different action creators that are assigned to the App component as props
*/
export default connect(null, actions)(App);
