const main = require("./css/base.styl");
const layout = require("./views/layout.pug");

const init = () => {
  document.querySelector(".timeline").innerHTML = layout({ name: "test" });
};

document.addEventListener("DOMContentLoaded", init);
