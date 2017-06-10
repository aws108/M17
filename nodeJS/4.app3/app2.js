console.log('Starting app...');

const fs=require('fs');
const os=require('os');

//coger archivos
const notes=require('./notes.js');

var platform=os.platform(); 
//fs.appendFile('plataforma.txt','Hello from' + platform+'and you are'+notes.age+'old');

//Otra opción:
//fs.appendFile('plataforma.txt',os.platform());

//------
var res=notes.addNote();
	//console.log(res);

console.log('Resultado: '+notes.add(9,4));