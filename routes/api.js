
//The dependencies we need.
const path = require('path');
const fs = require('fs')

//A package used for creating unique Ids
var uniqid = require('uniqid');

// routing
module.exports = (app) => {

  // GET /api/notes should read the db.json file and return all saved notes as JSON.
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  app.post('/api/notes', (req, res) => {
    let dbFile = fs.readFileSync('db/db.json');
    dbFile = JSON.parse(dbFile); //parse the json file.
    res.json(dbFile);
    //making the body of the note.
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      //making a unique ID.
      id: uniqid(),
    };
    //Push the data and write it to the file.
    dbFile.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbFile));
    res.json(dbFile);

  });


  // DELETE a note by ID.
  app.delete('/api/notes/:id', (req, res) => {
    //Reading in the JSON
    let dbFile = JSON.parse(fs.readFileSync('db/db.json'))
    //Finding the note with the specified ID and remove it.
    let deletedNote = dbFile.filter(note=> note.id !== req.params.id);
    //write the data to the file.
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deletedNote);
  })
};