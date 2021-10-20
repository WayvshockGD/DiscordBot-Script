import chalk from "chalk";

export = class ScriptError extends Error {
    public constructor(message?: string) {
        super(chalk.redBright(message));
    }

    public static token() {
        throw new this(this.red("Client token is missing!"));
    }

    public static red(t: string) {
        return chalk.redBright(t);
    }
}