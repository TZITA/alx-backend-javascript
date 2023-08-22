const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (userInput) => {
  console.log('Your name is:', userInput);
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
