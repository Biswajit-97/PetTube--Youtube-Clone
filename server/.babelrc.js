const package = require("../package.json");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: package.engines.node,
        },
      },
    ],
  ],
};
