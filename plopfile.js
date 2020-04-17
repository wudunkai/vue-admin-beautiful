const viewGenerator = require("./plop-templates/view/prompt");
const componentGenerator = require("./plop-templates/component/prompt");
const mockGenerator = require("./plop-templates/mock/prompt");
const vuexGenerator = require("./plop-templates/vuex/prompt");
module.exports = function (plop) {
  plop.setGenerator("view", viewGenerator);
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("mock&api", mockGenerator);
  plop.setGenerator("vuex", vuexGenerator);
};
