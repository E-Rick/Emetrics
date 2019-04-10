import React from 'react';
/* 
	@param BrowserRouter - react component that is the brains of react-router and tells it how
		to behave. It looks at the current url and changes a set of components that are visible at any time
	@param Route - react component that is used to setup a rule between a certain route that the user
		might visit  and a set of components that will be actually visible
*/
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
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
};

export default App;
