# Shorty 🥞

An easily recreatable branded shortened URL generator.

![Shorty Logo](./public/img/Shorty_Logo.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/johnhodge/shorty/badge/master?s=452b784a695acd9622302e927134242e94233854)](https://www.codefactor.io/repository/github/johnhodge/shorty/overview/master) [![Build status](https://ci.appveyor.com/api/projects/status/8u4c6uhwkq39u4o2?svg=true)](https://ci.appveyor.com/project/johnhodge/shorty) ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m786659961-5e2a5af708ee13a93d5cb995) ![Uptime Robot status](https://img.shields.io/uptimerobot/status/m786659961-5e2a5af708ee13a93d5cb995) ![GitHub issues](https://img.shields.io/github/issues/johnhodge/shorty)

## Getting Started

### Requirements

- [NodeJS](https://nodejs.org)
- [MongoDB](https://mongodb.com)

### Installation

Clone repo

```text
git clone https://github.com/johnhodge/shorty.git
```

Add a `.env` file with MongoDB URL to project root.

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
