import { p } from "../framework/elements";
import { onClick } from "../framework/events";
import { rerender } from "../framework/index";

export const Welcome = firstName => {
  let formattedName = firstName.toUpperCase();

  const popupAlert = () => {
    formattedName = formattedName + "!";
    rerender(template(formattedName));
  };

  const template = formattedName => {
    return p(`Welcome to the workshop, ${formattedName}!`, onClick(popupAlert));
  };

  return template(formattedName);
};
