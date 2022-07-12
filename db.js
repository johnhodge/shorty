const monk = require('monk');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;
const db = monk(mongoUri);
db.then(() => {
  console.log(`Connected to: ${mongoUri}\n`);
});

const urls = db.get('urls');
urls.createIndex({ slug: 1 }, { unique: true });

module.exports = urls;
