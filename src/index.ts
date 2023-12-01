import { User } from './models/User';
import { Tweet } from './models/Tweet';
import { users } from './database/users';

const mona = new User(
	'Monã',
	'monagabriel30@gmail.com',
	'Moon_Intruzo',
	'12345'
);
const gabriela = new User(
	'Gabriela',
	'monagabriel30@gmail.com',
	'Gabriela',
	'12345'
);
const mariane = new User(
	'Mariane',
	'monagabriel30@gmail.com',
	'Mariane',
	'12345'
);

mona.follow(gabriela);
mona.follow(mariane);
mariane.follow(mona);
mariane.follow(gabriela);
gabriela.follow(mona);
gabriela.follow(mariane);

console.log('-----------------');
const tweetMona1 = mona.sendTweet('Sou muito Gostoso');
const tweetMona2 = mona.sendTweet('Estou muito Triste Hoje');
const tweetMona3 = mona.sendTweet('Quero gozar');
console.log('-----------------');
const tweetGabriela1 = gabriela.sendTweet('SOu top');
const tweetGabriela2 = gabriela.sendTweet('Quero Chocolate');
const tweetGabriela3 = gabriela.sendTweet('Daria a vida por um doce hoje');
console.log('---------------');
const tweetMariane1 = mariane.sendTweet('arezzo é uma merda');
const tweetMariane2 = mariane.sendTweet('gosto de air de casa');
const tweetMariane3 = mariane.sendTweet('queria dar uma volta');

tweetGabriela1.addLike(mona);
tweetGabriela2.addLike(mona);
tweetGabriela3.addLike(mona);

tweetGabriela1.addReply(mona, 'Considero você muito Top mesmo!');
tweetGabriela1.addReply(mariane, 'Eu e o Monã Consideramos');

gabriela.showTweets();
