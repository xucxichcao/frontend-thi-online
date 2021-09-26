const globalVars = require("./src/css/var.js");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars,
      },
    },
  },
};
