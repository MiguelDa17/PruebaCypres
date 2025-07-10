const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // puedes dejar esto vacío o agregar plugins más adelante
    },
  },
  video: true, // Graba video de cada spec
  screenshotsFolder: false,
  screenshotOnRunFailure: false, 
  videosFolder: "cypress/videos",
});
