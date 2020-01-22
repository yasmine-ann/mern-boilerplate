import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const history = require('connect-history-api-fallback');

const app = express();

//Enable cors. This is the most basic implementation, please see cors documentation
//for further customization options.
app.use(cors());

//DB setup
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We have been connected!');
});


//If NODE_ENV is set to development in .env, execute development environment settings
if (process.env.NODE_ENV !== "production") {
    app.use(history());
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
    app.use(express.static("./dist"));
} else {
    app.use(express.static("./dist"));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve('./dist', 'index.html'));
    });
}



//Listen
app.listen(PORT, function() {
    console.log('Server is listening...');
});