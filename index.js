const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const yup = require('yup');
const { nanoid } = require('nanoid');
const monk = require('monk');

const app = express();
require('dotenv').config();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static(path.join('public')));

const port = process.env.PORT || 1234;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
  console.log(`Listening at http://${host}:${port}`);
})

let schema = yup.object().shape({
  slug: yup.string()
  .max(10, 'Slug exceeds 10 character maximum 🥡')
  .matches(/^[\w|\-|\0]{0,}$/i,'Slug contains invalid characters 🍔'),
  url: yup.string()
  .url('URL must be a valid URL 🍟')
  .required('URL is a required field 🧇'),
})

const mongoUri = process.env.MONGODB_URI
const db = monk(mongoUri);
db.then(() => {
  console.log(`Connected to: ${mongoUri}`)
})

const urls = db.get('urls');
urls.createIndex({ "slug": 1 }, { unique: true })

app.post('/api/v1/url', async (req, res, next) => {
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
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
  })
});

app.get('/:id', async (req, res, next) => {
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
});

module.exports = app;