const { v4: uuidv4 } = require('uuid');
const chalk = require('chalk');

console.log(chalk.green("Twoje nowe unikalne ID to:"));
console.log(chalk.blue.bold(uuidv4()));
