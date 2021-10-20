import Eris from "eris";
import ScriptError from "./ScriptError";
import { DBClientOptions } from "./types/Types";
import _meta from "./_meta.json";

export = class DiscordBotScript {
    public client: Eris.Client;

    public token: string;

    public constructor(token: string, options: DBClientOptions) {

        if (!token) {}

        this.client = new Eris.Client(token, { 
            intents: options.intents ?? [], 
            restMode: true 
        });

        this.token = token;
    }

    public get getPackageMeta(): typeof _meta {
        return _meta;
    }

    public async connect() {
        return await this.client.connect()
           .catch(err => {throw ScriptError.token()})
           .then(() => true);
    }
}