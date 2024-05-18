const posts = require("express").Router();
const fs = require("fs/promises");

// Above, I inmport fs/promises and the express router as well

posts.post("/", (req, res) => {
  // Above, is a path with "/" because all pathes in this file are given a name in the index file.

  

  fs.readFile("./db/db.json", "utf8")
    .then((data) => {
      let jsonData = JSON.parse(data);
      //Above, I read the current db file and then parse the data from it.
      // Above, Parse JSON string into JavaScript object because the retrieved data is a string.

      if (jsonData.length > 0) {
        let newNote = req.body;
        jsonData.push(newNote);
        const updatedJsonString = JSON.stringify(jsonData, null, 2);
        res.status(200).json(updatedJsonString);
        return updatedJsonString;

        // Above, is a if statment to make sure there is data to be read .
        // Then, we attach the body of the post request to newNote.
        //Then , we push the new note into our parsed json data array and stringify the array.
        // Last, we set the status and the result and return the updated string.
      } else {
        res.status(500).json("No respones in getting response array!");
      }

      // Above, is the reponse if no data is in the file or there is a server problem.
    })
    .then((updatedJsonString) => {
      // Above, we pass the updated string to this promise

      fs.writeFile("./db/db.json", updatedJsonString, "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        //Next, I write a a new db.json file with a updated string version.
        console.log("Data appended successfully.");
      });
    })

    .catch(error => {
        console.error('Error reading file:', error);
        res.status(500).json('Error reading file!');
    });
    
// Above, is to catch if there is a error with the promise or if there is no data in file. 



});

module.exports = posts;

// Last, I export the routes in this file.
