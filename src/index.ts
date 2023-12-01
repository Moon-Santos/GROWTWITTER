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
	'Monã',
	'monagabriel30@gmail.com',
	'Gabriela',
	'12345'
);
const mariane = new User('Monã', 'monagabriel30@gmail.com', 'Mariane', '12345');

mona.follow(gabriela);
mona.follow(mariane);

console.log('-----------------');
mona.sendTweet('Sou muito Gostoso');
mona.sendTweet('Estou muito Triste Hoje');
mona.sendTweet('Quero gozar');
console.log('-----------------');
gabriela.sendTweet('SOu top');
gabriela.sendTweet('Quero Chocolate');
gabriela.sendTweet('Daria a vida por um doce hoje');
console.log('---------------');
mariane.sendTweet('arezzo é uma merda');
mariane.sendTweet('gosto de air de casa');
mariane.sendTweet('queria dar uma volta');

mona.showFeed();
