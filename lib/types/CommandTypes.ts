import Eris from "eris";

export type EmbedCommandData = { [id: string]: Eris.EmbedOptions[] };
export type EmbedCommandDataMap = Map<string, EmbedCommandData>;

export type MapWithID<Val> = Map<string, Val>;

export interface CommandMetaData<V> {
    name: string;
    code: CommandObjectData<V>;
}

export interface CommandObjectData<V = boolean> {
    embeds?: EmbedCommandData,
    /**
     * The main part of this. It is used to execute scripts...
     */
    executeCode: string;
    /**
     * For use with setting message ids and such...
     */
    executeMessage?: (ctx: CommandContextData) => void;
    args?: (args: string[]) => V;
}

export interface CommandContextData {
    embeds: EmbedCommandDataMap;
    message: Eris.Message;
}