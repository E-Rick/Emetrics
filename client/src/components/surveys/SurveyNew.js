import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

/**
 * Shows SurveyForm and SurveyFormReview
 */
class SurveyNew extends Component {
	// initialize component level state
	state = { showFormReview: false };

	// helper function to render content
	renderContent() {
		if (this.state.showFormReview)
			return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
		return (
			<SurveyForm
				onSurveySubmit={() => {
					this.setState({ showFormReview: true });
				}}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// connect SurveyNew to the reduxForm so form values unmount when navigating away from SurveyNew
export default reduxForm({
	form : 'surveyForm'
})(SurveyNew);
