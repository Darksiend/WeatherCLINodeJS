import { bgRed } from "chalk";

const printError = (error) => {
  console.log(bgRed("ERROR") + error);
};
