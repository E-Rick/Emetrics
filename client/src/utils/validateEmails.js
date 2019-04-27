// regular expression for strings
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/**
 * helper function to validate a list of emails
 * function splits on commas then maps the array after trimming each email of whitespace
 * then validates each email through a regular exp filter and returns the emails that fail validation
 */
export default emails => {
	const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => re.test(email) === false);
	if (invalidEmails.length) return `These emails are invalid ${invalidEmails}`;
	return;
};
