const shell = require('shelljs');
const config = require('config');
const colors = require('colors');

const host = config.get('host') || 'localhost';
const port = config.get('port') || '8080';

console.log('using settings:');
console.log('\thost:', host);
console.log('\tport:', port);

const option = process.argv[2];

switch (option) {
  case 'dev':
    shell.exec(`cross-env HOST=${host} PORT=${port} webpack-dev-server --open --hot --progress --no-info --inline --colors --content-base ./docroot`);
    break;
  case 'build':
    shell.exec(`cross-env rimraf dist && webpack --progress --display-error-details`);
    break;
  default:
    // If the app type is invalid, stop execution of the file.
    console.log(colors.green('Invalid option.'));
    console.log(colors.green('See README.md for more details.'));
    return;
}
