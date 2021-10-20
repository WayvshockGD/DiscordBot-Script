import { BotEvent } from "../lib/structures/BotEvent";

it("Should return objects", () => {
    new BotEvent<[string, string]>("ready", { run: () => "h" }).init();
});