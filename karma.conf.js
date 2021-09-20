module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],
    port: 9876,
    files: [
      {
        pattern: "test/*.js",
        type: "module",
      },
      {
        pattern: "mkdiv.js",
        type: "module",
      },
    ],
    browsers: ["Chrome"],
    client: {
      mocha: {
        reporter: "html", // Use HTML reporter on Karma's debug.html
        timeout: 4000,
      },
    }, // optionally, configure the reporter

    reporters: ["progress", "coverage"],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      "mkdiv.js": ["coverage"],
    },
    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },
  });
};
