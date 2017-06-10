const express = require('express');
const app = express();
const bodyParser= require('body-parser')
/*The urlencoded method within body-parser tells body-parser to extract data 
from the <form> element and add them to the body property in the request object.*/


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/circuits', (req, res) => {
  console.log(req.body)
})

const MongoClient = require('mongodb').MongoClient


var db

MongoClient.connect('mongodb://127.0.0.1:27017/f1', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/circuits', (req, res) => {
  db.collection('circuits').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

//Buscar dentro de mongolab la collection
app.get('/', (req, res) => {
  var cursor = db.collection('circuits').find() 
  //The find method returns a cursor (A Mongo Object), este contiene todos los datos de nuestra bd
})

db.collection('circuits').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
  //El método toArray tiene una función de devolución de callback 
  	//que permite hacer cosas con datos que hemos recuperado de MongoLab
})

app.set('view engine', 'ejs')
res.render(view, locals)

app.get('/', (req, res) => {
  db.collection('circuits').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renderizas index.ejs
    res.render('index.ejs', {circuits: result})
  })
})