import DiscordBotScript from "../lib/package";
import { token } from "../config.test.json";

export let bot = new DiscordBotScript(token, { intents: ["guilds", "guildMessages"], prefix: [] });