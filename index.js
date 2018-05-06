const express = require('express');
const app = express();

// Model Section
require('./server/config/mongoose');
// End of Model Section


const bodyParser = require('body-parser')
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, './ngtask/dist/ngtask')));
// app.use(express.static( __dirname + '/my-angular-app/dist' ));

require('./server/config/routes')(app);

app.listen(5000, () => {
    console.log("listening on port 5000");
})
