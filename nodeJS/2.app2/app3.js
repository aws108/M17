console.log('Starting app.js');

const fs = require('fs');

const notes = require('./notes.js');

const _ = require('lodash');

const yargs = require('yargs');

const argv = yargs.argv;

//var filteredArray = _.uniq(['Charles',1,2,3,90,'Carlos']);

//console.log(filteredArray);

var command = process.argv[2];
console.log('Command: ',command);
//console.log('Process: ',process.argv);
//console.log('Yargs: ',argv);

if(command === 'add'){
	//console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
	console.log('Listing all notes');
}
else if (command === 'read'){
	console.log('Reading note');
}
else if (command === 'remove'){
	console.log('Removing note');
}
else{
	console.log('Command not recognize');
}