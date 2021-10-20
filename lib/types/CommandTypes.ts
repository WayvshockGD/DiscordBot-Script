import Eris from "eris";

export type EmbedCommandData = { [id: string]: Eris.EmbedOptions[] };
export type EmbedCommandDataMap = Map<string, EmbedCommandData>;

export interface CommandMetaData<V = boolean> {
    name: string;
    code: CommandObjectData<V>;
}

export interface CommandObjectData<V = boolean> {
    embeds?: EmbedCommandData,
    code: (ctx: CommandContextData) => void;
    args?: (args: string[]) => V;
}

export interface CommandContextData {
    embeds: EmbedCommandDataMap;
    msg: Eris.Message;
}