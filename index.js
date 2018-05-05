const express = require('express');
const app = express();

// Model Section
require('./server/config/mongoose');
// End of Model Section

const bodyParser = require('body-parser')
app.use(bodyParser.json());

require('./server/config/routes')(app);

app.listen(5000, () => {
    console.log("listening on port 5000");
})
