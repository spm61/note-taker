
//Needed Dependency
const path = require('path');

//The routing and Exporting the route.
module.exports = (app) => {

  //get notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  //The wildcard returns the base HTML page.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};