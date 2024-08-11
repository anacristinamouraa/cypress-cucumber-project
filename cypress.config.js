const { defineConfig } = require('cypress');
const setupWebpackPreprocessor = require('./cypress/webpack.config');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://sampleapp.tricentis.com/101/app.php', // Defina a URL base aqui
        setupNodeEvents(on, config) {
            setupWebpackPreprocessor(on, config);
            return config;
        },
        specPattern: 'cypress/e2e/**/*.feature',
        supportFile: 'cypress/support/e2e.js',
    },
});
