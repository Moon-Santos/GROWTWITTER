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
	'gabriela30@gmail.com',
	'Gabriela',
	'12345'
);
const mariane = new User('Mariane', 'mariane30@gmail.com', 'Mariane', '12345');

mona.follow(gabriela);
mona.follow(mariane);
console.log('--------------------');
mariane.follow(mona);
mariane.follow(gabriela);
console.log('--------------------');
gabriela.follow(mona);
gabriela.follow(mariane);

console.log('-----------------');
const tweetMona1 = mona.sendTweet('Sou muito orgulhoso!');
const tweetMona2 = mona.sendTweet('Estou muito Triste Hoje');
const tweetMona3 = mona.sendTweet('Quero jogar bola esse finde!');
console.log('-----------------');
const tweetGabriela1 = gabriela.sendTweet('Sou top');
const tweetGabriela2 = gabriela.sendTweet('Quero Chocolate');
const tweetGabriela3 = gabriela.sendTweet('Daria a vida por um doce hoje');
console.log('---------------');
const tweetMariane1 = mariane.sendTweet('Gosto de sair com meus amigos');
const tweetMariane2 = mariane.sendTweet('gosto de sair de casa');
const tweetMariane3 = mariane.sendTweet('queria dar uma volta');

tweetGabriela1.addLike(mona);
tweetGabriela2.addLike(mona);
tweetGabriela3.addLike(mona);

tweetMariane1.addLike(mona);
tweetMariane2.addLike(mona);
tweetMariane3.addLike(mona);

tweetMona1.addLike(mariane);
tweetMona2.addLike(mariane);
tweetMona3.addLike(mariane);

tweetMona1.addLike(gabriela);
tweetMona2.addLike(gabriela);
tweetMona3.addLike(gabriela);

tweetGabriela1.addReply(mona, 'Considero você muito Top mesmo!');
tweetGabriela1.addReply(mariane, 'Eu e o Monã Consideramos');

tweetGabriela1.show();
mona.showTweets();
