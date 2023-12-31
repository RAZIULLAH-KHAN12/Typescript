const path = require('path');  //This is nodejs import syntax

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist',
    },
    devtool: 'inline-source-map', 
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] 
    },
};