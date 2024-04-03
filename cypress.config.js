const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/signin',
    env: {
      db: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root'
      }
    }
  },
});
