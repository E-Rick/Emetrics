import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'; // helper to reach into redux store
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom'; // HOC helper to add history props to route submit

/**
 * Shows user their form inputs for review
 */
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	// create the survey review form field list from ./formFields fields array
	const fieldsList = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{fieldsList}
			<button className='yellow white-text darken-3 btn-flat' onClick={onCancel}>
				Back
			</button>
			<button className='green white-text btn-flat right' onClick={() => submitSurvey(formValues, history)}>
				Send Survey
				<i className='material-icons right'>email</i>
			</button>
		</div>
	);
};

// pass in redux store surveyForm state values into SurveyFormReview props
function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

/**
 * call withRouter higher-order component helper on the SurveyFormReview component
 * withRouter adds the history object by react-router passed along by props
 * call connect helper and add mapStateToProps and actions as options
 */
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
