const fs = require('fs');
const path = require('path');
let publicPath = '/';
const buildPath =  path.join(__dirname, '__build');

if (typeof process.env.PUBLIC_PATH !== 'undefined') {
  publicPath = process.env.PUBLIC_PATH;
}

module.exports = {
  name: 'Len Lester',
  build: {
    path: buildPath,
    publicPath,
    eslint: {
      options: {
        config: path.join(__dirname, '.eslintrc.js')
      }
    },
    css: {
      global: {
        purgeCss: {
          whitelist: ['loaded']
        }
      }
    },
    extend: () => {
      const config = {
        plugins: [],
        module: {
          rules: []
        }
      };
      return config;
    }
  }
};