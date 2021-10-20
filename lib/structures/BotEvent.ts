import Eris from "eris";

export interface EventOptions<T> {
    run: (...c: T[]) => string;
}

export class BotEvent<T> {
    public event: (keyof Eris.ClientEvents);

    public opt: EventOptions<T>;

    public constructor(event: (keyof Eris.ClientEvents), opt: EventOptions<T>) {
        this.event = event;
        this.opt = opt;
    }

    public init() {
        return { event: this.event, listener: this.opt.run };
    }
}