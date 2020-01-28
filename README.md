# MERN-stack Boilerplate with Webpack 4

### Introduction

MERN-Boilerplate is a fully customizable full-stack Mongo, Express, React/Redux, Node.js boilerplate app. Use it as a starting point for your own full-stack React projects.

#### Featuring

##### [Webpack 4](https://webpack.js.org/)
    HTML/CSS
        - html-loader
        - sass-loader/node-sass
        - css-loader
        - style-loader
        - postcss-loader
        - html-webpack-plugin
        - mini-css-extract-plugin
    JS
        - babel-loader
        - eslint-loader
        - terser-webpack-plugin
    ASSETS
        - responsive-loader
        - url-loader
        - file-loader
    MIDDLEWARE
        - webpack-dev-middleware (connects to Express server)
        - webpack-hot-middleware (enables HMR)
    TESTING
        - Jest

##### [MongoDB](https://www.mongodb.com/)
MongoDB with Mongoose ^5.7

##### [Express](https://expressjs.com/)
Back-end server.

##### [React](https://reactjs.org/)
React integrated with Routing (react-router-dom) and Redux (react-redux).

##### [Node.js](https://nodejs.org/en/)
Runs in the NodeJS environment.


### Installation

##### Prerequisites
- [NodeJS ^12+](https://nodejs.org/en/)
- [npm ^6+](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

```
git clone https://github.com/yasmine-ann/mern-boilerplate.git
cd mern-boilerplate
npm install 
```

### Usage

First, run
```npm run buildDev```
to build the development dist folder.
Begin serving files with Hot Module Reloading enabled by running
```npm run start```

To turn MongoDB on, run
```npm run dbOn```
***Note: dbOn runs the "mongo" command, intended for usage with WSL. Please change
command to reflect your system.