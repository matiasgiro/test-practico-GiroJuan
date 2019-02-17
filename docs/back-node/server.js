
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');


app.use(cors());

// Bundle API routes.
app.use('/api', require('./rutas/api.js')(app));

var port = process.env.PORT || 9898;

app.listen(port, function () {
  console.log("Live on port: " + port);

});


