import { randomUUID } from 'crypto';

export class Tweet {
	private id: string;
	constructor(private _content: string, private type: string) {
		this.id = randomUUID();
	}
	get content(): string {
		return this._content;
	}
}
