const webpack = require('webpack');
const path = require('path');
const { startDevServer } = require('@cypress/webpack-dev-server');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = (on, config) => {
    addCucumberPreprocessorPlugin(on, config);

    on('dev-server:start', (options) =>
        startDevServer({
        options,
        webpackConfig: {
            resolve: {
            extensions: ['.ts', '.js', '.jsx', '.tsx', '.feature'],
            },
            module: {
            rules: [
                {
                test: /\.feature$/,
                use: [
                    {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config,
                    },
                ],
                },
            ],
            },
        },
        })
    );

    return config;
};
