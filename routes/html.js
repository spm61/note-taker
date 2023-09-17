//dependencies
const path = require('path');
const html = require('express').Router();

//The Routing
//If we want the notes file that's what we should get.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Return the base index.html file if no other routes exist. 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = html;