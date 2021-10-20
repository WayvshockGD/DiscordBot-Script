import DiscordBotScript from "../lib/package";
import { token } from "../config.test.json";

let bot = new DiscordBotScript(token, {intents: ["guilds", "guildMessages"], prefix: []});

it("should put the command in the map", () => {
    bot.loadCommand<Array<string>>({
        name: "test",
        code: {
            executeCode: "",
        }
    })
});