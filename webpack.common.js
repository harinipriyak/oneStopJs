const path = require('path');

module.exports = {    
    entry: ['./src/js/index.js','./src/sass/main.scss'], 
    output: {
        filename: 'js/main.js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass', '.css'],
        alias: {
          app: path.resolve(__dirname, 'app'),
          client: path.resolve(__dirname, 'client'),
          config: path.resolve(__dirname, 'config'),
          test: path.resolve(__dirname, 'test'),
        },
      },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
}