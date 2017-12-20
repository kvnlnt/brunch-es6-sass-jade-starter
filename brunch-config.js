// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "module.js": /^app/
    }
  },
  stylesheets: {
    joinTo: "module.css"
  }
};

exports.plugins = {
  babel: { presets: ["latest"] },
  pug: {
    inlineRuntimeFunctions: true
  },
  stylus: {
    modules: true
  }
};
