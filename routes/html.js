//dependencies
const path = require('path');
const html = require('express').Router();

//The Routing
//If we want the notes file that's what we should get.
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Return the base index.html file in the event that anything that isn't a route is supplied. 
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = html;