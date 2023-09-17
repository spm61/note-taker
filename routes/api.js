//adding required dependencies.
const path = require('path');
const fs = require('fs');
//define the route to be used.
const api = require('express').Router();
var uniqid = require('uniqid'); //enables the creation of unique Ids, which is always good.

api.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

//Post request to recieve a new note.
api.post('/api/notes', (req, res) => {
let dbFile = fs.readFileSync('db/db.json');
dbFile = JSON.parse(dbFile); //reads the file and then parses the JSON
res.json(dbFile);
//the Note's body.
let newNote = {
    title: req.body.title,
    text: req.body.text,
    //They need a unique Id.
    id: uniqid(),
};

dbFile.push(newNote); //Add the note to the Json File
fs.writeFileSync('db/db.json', JSON.stringify(dbFile)); //write the new data to the file and then pass it back.
res.json(dbFile);
});

//delete a note by ID.  
api.delete('/api/notes/:id', (req, res) => {
    //Get the data back from the Json.
    let dbFile = JSON.parse(fs.readFileSync('db/db.json'))
    //find the specified note and delete it.
    let deletedNote = dbFile.filter(note => note.id !== req.params.id);
    //Send the new data back to the file.
    fs.writeFileSync('db/db.json', JSON.stringify(deletedNote));
    res.json(deletedNote); 
  })

module.exports = api; //export the module. 