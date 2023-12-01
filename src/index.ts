import { User } from './models/User';
import { Tweet } from './models/Tweet';
import { users } from './database/users';

const mona = new User(
	'Monã',
	'monagabriel30@gmail.com',
	'Moon_Intruzo',
	'12345'
);
const mona1 = new User(
	'Monã',
	'monagabriel30@gmail.com',
	'Moon_Intruze',
	'12345'
);

console.log('--------------------');
console.log(users);
console.log('--------------------');
