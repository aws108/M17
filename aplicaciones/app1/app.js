//Crear en el directorio donde se pone esto: npm install mongodb

//Conectarse a la base de datos para iniciar la aplicación
var MongoClient = require ('mongodb').MongoClient,
	assert = require('assert');

var url = 'mongodb://localhost:27017/video';

MongoClient.connect(url, function(err, db){

	assert.equal(null, err);
	console.log("Succesfully connected to server");

	//Mostrar la base de datos que hemos creado en Mongo -->Video -->Movie

	db.collection('movie').find({}).toArray(function(err, doc){

		//Printar los documentos

		doc.forEach(function(doc){
			console.log(doc.title);
		});

		//Cerrar la conexión de la BD

		db.close();

	});

	//si lo ha hecho bien:
	console.log("Called FIND()");

});