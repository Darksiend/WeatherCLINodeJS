import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + error);
};
const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")} 
      Without parameters - display weather 
      -s [City] for City setting
      -h  help
      -t [API_KEY] API Key setting`
  );
};

export { printHelp, printSuccess, printError };
