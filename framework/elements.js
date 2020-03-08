import h from "snabbdom/h";

const createElement = tagName => string => {
  return {
    type: "element",
    template: h(tagName, {}, string)
  };
};

export const p = createElement("p");
