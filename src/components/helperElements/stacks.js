export const shallowStackChoices = [2, 3, 4, 5, 6, 7, 8, 9];
export const smallStackChoices = [10, 11, 12, 14, 17, 20, 25];
export const bigStackChoices = [30, 35, 40, 50, 60, 80, 100];

const stackChoiceFunction = (stacksize) => {
  switch (stacksize) {
    case "small":
      return shallowStackChoices;
    case "medium":
      return smallStackChoices;
    case "big":
      return bigStackChoices;
    default:
      break;
  }
};

export default stackChoiceFunction;
