import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

/**
 * Shows a form for a user to add input
 */
class SurveyForm extends Component {
	// helper function to iterate over formFields array and for every object, create
	// and return one custom redux field object that uses the props label and name
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} component={SurveyField} text='text' label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

	// call validateEmails helper to validate emails and return errors or '' if empty
	errors.recipients = validateEmails(values.recipients || '');

	// iterate over formFields & add no value errors with matching values props
	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) errors[name] = noValueError;
	});

	return errors;
}

/**
 * Redux form helper that functions like connect helper and you pass in config here
 * @param validate Pass in validation function to be run everytime form submits
 * @param form Specifies where redux form will store all the form values inside the redux store
 * @param destroyOnUnmount Config to save form values in redux form when form isn't rendered
 */
export default reduxForm({
	validate,
	form             : 'surveyForm',
	destroyOnUnmount : false
})(SurveyForm);
