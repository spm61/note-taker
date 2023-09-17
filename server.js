//require and then use express.
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001; //Heroku-approved port declaration

//set up middlewares for later use by the application.
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //gotta parse JSON too.

//Setting up possible route names, these will be defined in a seperate file.
require('./routes/api')(app);
require('./routes/html')(app);

//Listen to the port so the server can run.
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });