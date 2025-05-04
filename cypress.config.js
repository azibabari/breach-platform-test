const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://breach-fe.qa.mvm-tech.xyz',
    setupNodeEvents(on, config) {
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
