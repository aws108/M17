console.log('Starting notes.js');

var addNote = (title,body) =>{
	console.log('Adding note',title,body);
};

var listNote = () =>{
	console.log('Listing all notes');
};

var readNote = (title,body) =>{
	console.log('Reading notes',title,body);
};

var removeNote = (title,body) =>{
	console.log('Removing note',title,body);
};


module.exports = {
	addNote,
	listNote,
	readNote,
	removeNote

};