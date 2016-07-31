/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const get = require('./get');

const WebpackDevServer = require('webpack-dev-server');

const TogglClient = require('toggl-api');
const toggl = new TogglClient({ apiToken: 'e8d4f6a4670d8b4156ed97cafe42d0c2' });

const app = express();
const port = process.env.PORT || 3000;

var config = process.env.NODE_ENV === 'production'
  ? config = require('../webpack.config.production')
  : require('../webpack.config');

const compiler = webpack(config);


var bundler = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  proxy: {
    '*/api/*': {
      target: 'http://localhost:8080',
      secure: false
    }
  },
  historyApiFallback: true
});


app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get('/api/get/:method', get(toggl));

app.post('/api/auth', (req, res) => {
  const token = req.body.token || '';
  // e8d4f6a4670d8b4156ed97cafe42d0c2
  toggl = new TogglClient({ apiToken: 'e8d4f6a4670d8b4156ed97cafe42d0c2' });
})

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: process.env.PWD + '/dist' });
});

app.listen(8080);
bundler.listen(port);

