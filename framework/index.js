export const init = (selector, component) => {
  const app = document.querySelector(selector);
  const element = document.createElement(component.type);
  const textContent = document.createTextNode(component.template);

  element.append(textContent);
  app.append(element);
};
