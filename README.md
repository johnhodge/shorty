# Shorty 🥞

An easily recreatable branded shortened URL generator.

![Shorty Logo](./public/img/Shorty_Logo.svg)

## Getting Started

### Requirements

- [NodeJS](https://nodejs.com)
- [MongoDB](https://mongodb.com)

### Installation

Clone repo

```text
git clone https://github.com/johnhodge/shorty.git
```

Add `.env` file with MongoDB to project root.

```text
cd shorty; echo "MONGODB_URI='{{INSERT MONGDO DB URL HERE}}'" > .env
```

Install dependencies and launch development environment

```text
npm install && debug=true npm run dev
```

Customize as much as you like and push to production.

## Options

- Shorty can be extended with additional security and user authentication support with MongoDB Realm (or through several other methods/middlewears).
- API rate limiting has been imposed and can be tweaked as needed.
- Error messages can be customized via Yup.
- Shorty will work with a variety of deployment services and has been battle tested with Heroku.

## Resources

### Articles, Tutorials, etc

- [MongoDB Realm](https://docs.mongodb.com/realm/tutorial)
- [Express API reference](https://expressjs.com/en/api.html)
- [API rate limiting with Express](https://www.npmjs.com/package/express-rate-limit)
- [Deploy NodeJS to Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Yup docs](https://www.npmjs.com/package/yup)

### Support

<https://github.com/johnhodge/shorty/issues>

### Contributing and Contact

Shorty is accepting PRs for your brilliant ideas.
