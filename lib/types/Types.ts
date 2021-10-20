import Eris from "eris";

export interface DBClientOptions {
    prefix: string[];
    intents: Eris.ClientOptions["intents"];
}

export * from "./CommandTypes";