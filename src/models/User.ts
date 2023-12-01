import { randomUUID } from 'crypto';
import { users } from '../database/users';
import { Tweet } from './Tweet';

export class User {
	private id: string;
	private username: string;
	private _followers: User[] = [];
	private _following: User[] = [];
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

	get followers() {
		return this._followers;
	}

	sendTweet(content: string) {
		const newTweet = new Tweet(content, 'normal');
		this.tweets.push(newTweet);
		console.log(`${this.name} Tweet sent.`);
	}

	follow(userToFollow: User) {
		if (
			this._following.includes(userToFollow) ||
			userToFollow.username === this.username
		) {
			throw new Error(
				`Você já está seguindo o user ${userToFollow.username}, e não pode seguir a si mesmo;`
			);
		}
		userToFollow._followers.push(this);
		this._following.push(userToFollow);
		console.log(
			`<${userToFollow.username}> foi seguido por <${this.username}>`
		);
	}

	showFeed() {
		console.log(`<${this.username} Feed >`);
		this.showTweets();

		this._following.forEach((user) => {
			user.showTweets();
		});
	}
	showTweets(): void {
		this.tweets.forEach((tweet) => {
			console.log(`<@${this.username}: ${tweet.content}>
            `);
			console.log('---------------------');
		});
	}

	private static isUsernameTaken(username: string, userList: User[]): boolean {
		return userList.some((user) => user.username === username);
	}
}
