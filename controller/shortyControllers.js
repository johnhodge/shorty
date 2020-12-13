const schema = require('../models/shortyModels');
const urls = require('../db');
const { nanoid } = require('nanoid');

exports.run_redirect_get = (async (req, res, next) => {
  const { id: slug } = req.params;
  try {
    const url = await urls.findOne({ slug });
    if (url) {
      res.redirect(url.url);
    } else {
      res.redirect(`/?error=Slug: '${slug}' not found`);
    }
  } catch (error) {
    res.redirect(`/?error=Link not found`);
  }
  // res.render('index', { title: 'Hey', message: 'Hello there!' })
});

exports.create_redirect_post = (async (req, res, next) => {
  let { url, slug } = req.body;
  try {
    await schema.validate({
      slug,
      url,
    });
    if (!slug) {
      slug = nanoid(5);
    }
    slug = slug.toLowerCase();
    const newUrl = {
      url,
      slug,
    };
    const created = await urls.insert(newUrl);
    res.json(created);
  } catch (error) {
    if (error.message.startsWith('E11000')) {
      error.message = 'Slug in use 🧀'
    } else {
      error.message = error.message
    }
    next(error);
  }
  // res.render('index', { title: 'Hey', message: 'Hello there!' })
});
