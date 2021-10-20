import Eris from "eris";
import { CommandMetaData } from "./types/CommandTypes"

export = class BotCaches {
    public commands = new Map<string, CommandMetaData>();
    public embeds = new Map<string, Eris.EmbedOptions[]>();
}