#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    //Help
    printHelp();
  }
  if (args.s) {
    // Save city
  }
  if (args.t) {
    //Save Token
    saveKeyValue("token", args.t);
  }
  //Display Weather
};

initCLI();
