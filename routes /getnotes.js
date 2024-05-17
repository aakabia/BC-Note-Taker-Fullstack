
const notes = require('express').Router();
const path = require('path');


notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
   
});

// Above, Is a get route to notes that respondes with the notes.html page.
// We use path to accomplish this. 