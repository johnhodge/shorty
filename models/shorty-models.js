const yup = require('yup');

const schema = yup.object().shape({
	slug: yup.string()
		.max(10, 'Slug exceeds 10 character maximum 🥡')
		.matches(/^[\w|\-\0]*$/i, 'Slug contains invalid characters 🍔'),
	url: yup.string()
		.url('URL must be a valid URL 🍟')
		.required('URL is a required field 🧇')
});

module.exports = schema;
