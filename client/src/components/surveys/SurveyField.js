import React from 'react';

/** 
 * SurveyField contains logic to render a single label and text input
 * @param {*} input props.input - input object from redux-form
 * @param {*} label props.label - label for each SurveyField input
 * @param {*} error props.meta.error - a string with error name else null string
 * @param {*} touched props.meta.touched - a boolean that returns true if user clicks
 * 	in the field and then clicks out
 */
const SurveyField = ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<div className='red-text' style={{ marginBottom: '20px' }}>
				{/* if user touches input and validation returns an error, render error */}
				{touched && error}
			</div>
		</div>
	);
};

export default SurveyField;
