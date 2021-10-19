import chalk from "chalk";

export function returnError(str: unknown) {
    return new Error(chalk.redBright(str));
}