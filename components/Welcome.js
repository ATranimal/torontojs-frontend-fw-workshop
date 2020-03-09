import { p, div } from "../framework/elements";
import { onClick } from "../framework/events";
import { rerender } from "../framework/index";

import { Clicker } from "../components/Clicker";

export const Welcome = firstName => {
  let formattedName = firstName.toUpperCase();
  let counter = 0;

  const popupAlert = () => {
    formattedName = formattedName + "!";
    rerender(template(formattedName, counter));
  };

  const incrementTimer = () => {
    counter++;
    rerender(template(formattedName, counter));
  };

  const template = (formattedName, counter) => {
    return div(
      [
        `Welcome to the workshop, ${formattedName}!`,
        p("You're great!"),
        div(Clicker(counter, incrementTimer))
      ],
      onClick(popupAlert)
    );
  };

  return template(formattedName, counter);
};
