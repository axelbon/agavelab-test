var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const apiRouter = require('./routes/api');


require('./db');

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});
