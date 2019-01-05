# ko-webpack-react 

webpack setting package for react compile  

## Release

### 1.1
add support for webpack-stream

## Usage

import settings for your production build and dev environment set in your `webpack.config.js` 

### Quick start

```javascript
const {config} = require('ko-webpack-vanilla');

const options = {
  entry: {
    app: '/src/index.js',
    new: '/src/index.js'
  },

  output: {
    path: ('/assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js',
  }
};

module.exports = config(options);

```

with sample package json scripts

```json
{
  "scripts": {
    "dev-env": "NODE_ENV=dev yarn webpack-dev-server",
    "start": "yarn dev-env",
    "build": "NODE_ENV=prod yarn webpack --mode production"
  }
}
```
### Import base options

```javascript
const {prod} = require('ko-webpack-vanilla');

const options = {
  entry: {
    app: '/src/index.js',
    new: '/src/index.js'
  },

  output: {
    path: ('/assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js',
  }
};

module.exports = prod(options); // yarn webpack
```

or 

```javascript
const {dev} = require('ko-webpack-vanilla');

const options = {
  entry: {
    app: '/src/index.js',
    new: '/src/index.js'
  },

  output: {
    path: ('/assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js',
  }
};

module.exports = dev(options); // yarn webpack-dev-server
```