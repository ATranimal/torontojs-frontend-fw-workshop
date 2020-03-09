import h from "snabbdom/h";

const createElement = tagName => (children, ...args) => {
  return h(tagName, ...args, children);
};

export const p = createElement("p");
export const div = createElement("div");
