import React from 'react';

/** 
 * SurveyField contains logic to render a single label and text input
 * @arg {*} input es6 de-structuring of props.input  
 */
const SurveyField = ({ input, label }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
};

export default SurveyField;
