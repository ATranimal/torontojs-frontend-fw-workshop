import * as snabbdom from "snabbdom";

const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

let oldVnode;

export const init = (selector, component) => {
  const app = document.querySelector(selector);

  oldVnode = patch(app, component);
};

export const rerender = component => {
  oldVnode = patch(oldVnode, component);
};
