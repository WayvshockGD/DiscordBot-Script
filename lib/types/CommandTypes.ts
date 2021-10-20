import Eris from "eris";

export type EmbedCommandData = { [id: string]: Eris.EmbedOptions[] };
export type EmbedCommandDataMap = Map<string, EmbedCommandData>;

export type MapWithID<Val> = Map<string, Val>;

export interface CommandMetaData<V> {
    /**
     * The name of the whole command.
     */
    name: string;
    /**
     * Basically just everything that makes the thing go.
     */
    code: CommandObjectData<V>;
}

export interface CommandObjectData<V = boolean> {
    /**
     * Set the embed data here and it will automatically set it in the loader.
     */
    embeds?: EmbedCommandData,
    /**
     * The main part of this. It is used to execute scripts...
     */
    executeCode: string;
    /**
     * For use with setting message ids and such...
     */
    executeMessage?: (ctx: CommandContextData) => void;
    /**
     * Args checker for checking arguments...
     */
    args?: (args: string[]) => V;
}

export interface CommandContextData {
    /**
     * Embed map for setting or getting embeds by id.
     */
    embeds: EmbedCommandDataMap;
    /**
     * Message content for things if you need.
     */
    message: Eris.Message;
}