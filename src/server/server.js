import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

const app = express();

//DB setup
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We have been connected!');
});

if (isDevelopment) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    //require webpack config
    const config = require('../../webpack.dev.config.js');
    //create compiler
    const compiler = webpack(config);
    //use webpack-dev-middleware to serve the bundles
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
    //enable HMR
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
}

//Listen
app.listen(PORT, funtion() {
    console.log('Server is listening...');
});