import { randomUUID } from 'crypto';

export class Tweet {
	private id: string;
	constructor(private content: string, private type: string) {
		this.id = randomUUID();
	}
}
