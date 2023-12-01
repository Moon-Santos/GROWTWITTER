import { randomUUID } from 'crypto';
import { users } from '../database/users';
import { Tweet } from './Tweet';

export class User {
	private id: string;
	private username: string;
	private followers: User[] = [];
	private tweets: Tweet[] = [];
	constructor(
		private name: string,
		private email: string,
		username: string,
		private password: string
	) {
		if (User.isUsernameTaken(username, users)) {
			throw new Error('Username já está em uso. Escolha outro.');
		}

		this.id = randomUUID();
		this.username = username;
		users.push(this);
	}
	sendTweet() {}
	follow() {}
	showFeed() {}
	showTweets() {}

	private static isUsernameTaken(username: string, userList: User[]): boolean {
		return userList.some((user) => user.username === username);
	}
}
