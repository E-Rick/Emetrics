import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{ label: 'Survey Title', name: 'title', noValueError: 'You must provide a survey title' },
	{ label: 'Subject Line', name: 'subject', noValueError: 'You must provide a subject' },
	{ label: 'Email Body', name: 'body', noValueError: 'You must provide a body' },
	{ label: 'Recipient List', name: 'emails', noValueError: 'You must provide a recipient list' }
];

/**
 * Shows a form for a user to add input
 */
class SurveyForm extends Component {
	// helper function to iterate over FIELDS array and for every object, create
	// and return one custom redux field object that uses the props label and name
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return <Field key={name} component={SurveyField} text='text' label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<Link to='/surveys' className='red btn-flat white-text'>
						Cancel
					</Link>
					<button type='submit' className='teal btn-flat right white-text'>
						Next
						<i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		);
	}
}

/**
 * Redux-form helper function that adds validation to the form
 * @param {*} values Object containing all the values coming from the SurveyForm
 * @return {errors}
 */
function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	// add errors with matching values props
	_.each(FIELDS, ({ name, noValueError }) => {
		if (!values[name]) errors[name] = noValueError;
	});

	return errors;
}

// pass in validate function to be run every submit
export default reduxForm({
	validate,
	form     : 'surveyForm'
})(SurveyForm);
