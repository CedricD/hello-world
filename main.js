"use strict";
console.log("Running webapp...");

let Express = require('express');
let app = new Express();
let port = process.env.PORT || 80;


var reload = require('reload');


app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

app.use(Express.static('./app'));


app.get('/messages', function (req, res) {
    res.status(200).json(require('./messages.json'));
});

app.listen(port, function () {
    //console.log(`Running webhook listener...`);
    console.log("App listening on port ${port}");
});

reload(app);
