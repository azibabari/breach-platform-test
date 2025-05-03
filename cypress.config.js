const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://breach-fe.qa.mvm-tech.xyz',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
