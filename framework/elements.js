import h from "snabbdom/h";

const createElement = tagName => (string, ...args) => {
  return {
    type: "element",
    template: h(tagName, ...args, string)
  };
};

export const p = createElement("p");
