let age = prompt('age ?', '18');

message = (age < 3) ? 'Hi! Baby' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' : 'What an unusual age!';

alert(message);