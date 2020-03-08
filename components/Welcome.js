import { p } from "../framework/elements";

export const Welcome = firstName => {
  const formattedName = firstName.toUpperCase();

  return p(`Welcome to the workshop, ${formattedName}!`);
};
