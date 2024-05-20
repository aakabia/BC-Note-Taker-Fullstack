const express = require('express');
const path = require('path');

// Above, I require express and path.



const api = require("./allroutes/index");
// Above, I retrieve all the routes from index.js in the routes folder 



const app = express();
// Above, I create an instance of express.

const PORT = process.env.PORT || 3001;
// Above, I create a default port. We were told to use 3001.
//  I add the process.env for deployment.


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Above, is my middleware which ignores the public folder, parse json body data, and url encoded data of the body to post requests.
// Above, I use middleware to allow all my imported api routes to start with /api.


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
   
});

// Above, Is a get route to notes that respondes with the notes.html page.
// We use path to accomplish this. 



app.get('*', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public/index.html'))

});

// Above, Is a get route that respondes with the index.html page.
// We use path to accomplish this.
// This route is also the defualt route. 
// Also, all other routes must come before your default route. 


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// Above, we create a listen occurance for our server so we can run it. 







