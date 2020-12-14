const schema = require('../models/shorty-models');
const urls = require('../db');
const {nanoid} = require('nanoid');

exports.setupFormGet = (response => {
	response.render('index');
});

exports.createRedirectPost = (async (request, response, next) => {
	let {url, slug} = request.body;
	try {
		await schema.validate({
			slug,
			url
		});
		if (!slug) {
			slug = nanoid(5);
		}

		slug = slug.toLowerCase();
		const newUrl = {
			url,
			slug
		};
		const created = await urls.insert(newUrl);
		response.json(created);
	} catch (error) {
		if (error.message.startsWith('E11000')) {
			error.message = 'Slug in use 🧀';
		} else {
			error.message = error.message;
		}

		next(error);
	}
});

exports.runRedirectGet = (async (request, response) => {
	const {id: slug} = request.params;
	try {
		const url = await urls.findOne({slug});
		if (url) {
			response.redirect(url.url);
		} else {
			response.redirect(`/?error=Slug: '${slug}' not found`);
		}
	} catch {
		response.redirect('/?error=Link not found');
	}
});
