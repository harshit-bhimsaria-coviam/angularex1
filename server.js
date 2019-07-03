var express = require('express');
var app = express();
app.use(express.static('recipies'));
app.listen(8080);
console.log("App listening on port 8080");