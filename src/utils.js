import { sleep } from "mooks";

export const fetchCount = async (min = 0, max = 10) => {
  await sleep(1000);
  return Math.floor(Math.random() * (max - min)) + min;
};
