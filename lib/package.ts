import Eris from "eris";
import BotCaches from "./BotCaches";
import ScriptError from "./ScriptError";
import { CommandMetaData, DBClientOptions } from "./types/Types";
import { returnError } from "./util/Util";
import _meta from "./_meta.json";

export = class DiscordBotScript {
    public client: Eris.Client;

    public caches: BotCaches;

    public token: string;

    public constructor(token: string, options: DBClientOptions) {

        if (!token) throw ScriptError.token();

        this.client = new Eris.Client(token, { 
            intents: options.intents ?? [], 
            restMode: true 
        });

        this.caches = new BotCaches();

        this.token = token;

        (async () => await this.connect())();
    }

    public loadCommand<V>(CommandMetaCommandData: CommandMetaData<V>) {
        let d = CommandMetaCommandData;
        let d_ = CommandMetaCommandData;

        if (typeof d_ === "undefined") throw returnError("'loadCommand()' is missing property command options.");
        if (typeof d_.name === "undefined") throw returnError("'loadCommand()' is missing a name...");
        
        if (d_.code.embeds) {
            for (let [id, data] of Object.entries(d_.code.embeds)) {
                this.caches.embeds.set(id, data);
            }
        }

        this.caches.commands.set(d_.name, d);
    }

    public get getPackageMeta(): typeof _meta {
        return _meta;
    }

    private async connect() {
        return await this.client.connect()
           .catch(err => {throw returnError(err)})
           .then(() => true);
    }
}