const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport",
  metadata: {
    device: "Github Actions machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});