import { p } from "../framework/elements";
import { onClick } from "../framework/events";

export const Clicker = (counter, incrementTimer) => {
  const template = counter => {
    return p(
      `You have clicked here ${counter} times, friend.`,
      onClick(incrementTimer)
    );
  };

  return template(counter);
};
