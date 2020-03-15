const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),

    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             "generatorOpts": {
            //                 "jsescOption": {
            //                     "compact": false
            //                 }
            //             },
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    }
};