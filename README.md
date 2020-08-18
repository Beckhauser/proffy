<h1 align="center">
  <img src="logo.svg" alt="Logo" height="70">
</h1>

<h3 align="center">
  Proffy - Get in touch with any teacher and learn what you want.
</h3>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Proffy%20API%20-%20Beckhauser&uri=https%3A%2F%2Fgithub.com%2FBeckhauser%2FProffy%2Fblob%2Fmaster%2FInsomnia.json" target="_blank">
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1596552194/proffy/proffy-mockup_a2owui.png">

## 📚 About the project

This project was developed on the Next Level Week #02 event by [Rocketseat](https://rocketseat.com.br/) 🚀&nbsp;💜

This application is designed to connect teachers and students. For teachers, it is possible to define the start and end time of classes, the hourly price and describe themselves. Studens can get in touch and choose favorites teachers.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Knex.js](http://knexjs.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Expo](https://expo.io/)
- [SQLite](https://www.sqlite.org/index.html)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/Beckhauser/proffy && cd proffy
```

**Install dependencies**

```bash
$ npm install
```

**Follow the steps below**

### Backend

```bash
# Install SQLite

# Use the script to run the migrations
$ npm run knex:migrate

# To finish, run the api service
$ npm start

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/web/src/services/api.ts'
# have the IP to your API

# Start the client
$ npm start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/mobile/src/services/api.ts'
# have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ npm start
```

---

Made with 📦 by Lucas Beckhauser 
