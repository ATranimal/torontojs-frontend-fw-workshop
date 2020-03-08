import { p } from "../framework/elements";
import { onClick } from "../framework/events";

export const Welcome = firstName => {
  const formattedName = firstName.toUpperCase();

  const popupAlert = () => {
    alert("WOW!");
  };

  return p(`Welcome to the workshop, ${formattedName}!`, onClick(popupAlert));
};
