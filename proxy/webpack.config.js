const path = require('path');

module.exports = {
  entry: {
    vendor: ['styled-components'],
    app1: '../yalp-gallery-service/client/index.jsx',
    app2: '../yalp-reviews-service/client/index.jsx',
    app3: '../yalp-header-service/client/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
  },
  optimization: {
    runtimeChunk: {
      name: "vendor"
    },
    noEmitOnErrors: true,
    concatenateModules: true,
    namedModules: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: Infinity,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          name: "vendor",
          enforce: true
        },
        default: {
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'prox.js',
    path: `${__dirname}/public`,
  },
};
