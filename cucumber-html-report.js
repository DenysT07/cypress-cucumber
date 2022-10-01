const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport",
  metadata: {
    device: "Local test machine",
    platform: {
      name: "Ubuntu",
      version: "latest",
    },
  },
});