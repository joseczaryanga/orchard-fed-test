const path = require('path');

module.exports = {
  target: 'node',
  entry: 'pages/index.html',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};