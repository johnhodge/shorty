const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const shortyRouter = require('./routes/shortyRoutes');

const app = express();
require('dotenv').config();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static(path.join('public')));
app.use(cors());

app.set('trust proxy', 1);
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: {
    message: 'Too many calls, wait a minute 🍩',
    stack: '🥞',
  },
});
app.use('/api/', apiLimiter);
app.use('/', shortyRouter);

const port = process.env.PORT || 1234;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
  console.log(`\nListening at http://${host}:${port}`);
});

// app.set('view engine', 'pug')

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
});

module.exports = app;
