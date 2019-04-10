import React from 'react';
/* 
	@param BrowserRouter - react-router-dom helper that is the brains of react-router and tells it how
		to behave. It looks at the current url and changes a set of components that are visible at any time
	@param Route - react component that is used to setup a rule between a certain route that the user
		might visit  and a set of components that will be actually visible
*/
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
	return <div>Hi There!</div>;
};

export default App;
