const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.imdb.com/',
    
    specPattern: 'cypress/e2e/**/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  browser: ["chrome", "electron", "firefox"],  
});
