import Eris from "eris";
import { DBClientOptions } from "./Types";

export = class DiscordBotScript {
    public client: Eris.Client;

    public token: string;

    public constructor(token: string, options: DBClientOptions) {

        this.client = new Eris.Client(token, { 
            intents: options.intents ?? [], 
            restMode: true 
        });

        this.token = token;
    }

    public async connect() {}
}