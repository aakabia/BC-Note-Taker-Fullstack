const express = require('express');
const path = require('path');

// Above, I require express and path.



const api = require('./');




const app = express();
// Above, I create an instance of express.

const PORT = 3001;
// Above, I create a default port. We were told to use 3001.


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notes', api);

// Above, is my middleware which ignores the public folder, parse json body data, and url encoded data of the body to post requests.





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







