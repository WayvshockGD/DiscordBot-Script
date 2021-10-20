import ScriptError from "../ScriptError";

export function returnError(str: string): ScriptError {
    return new ScriptError(str);
};