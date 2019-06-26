import { sleep } from "mooks";

export const fetchCount = async (min = 0, max = 10) => {
  await sleep(500);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};
