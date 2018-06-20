var express = require('express');
var todoController=require('./controllers/todocontroller.js');
var app = express();
 
//set up template engine
app.set('view engine', 'ejs');
//static files
app.use( express.static(__dirname + '/public'));


//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log(' Server listening on 3000');
