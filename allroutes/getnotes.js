const notes = require("express").Router();
const fs = require("fs/promises");

// Above, I import fs promises in order for asynchronous functionality.
// Also, You must make sure to use the router version of express here.

notes.get("/", (req, res) => {
  // Above, is a path with "/" because all pathes in this file are given a name in the index file.

  fs.readFile("./db/db.json", "utf8")
    .then((data) => {
      let jsonData = JSON.parse(data);
      //Above, I read the current db file and then parse the data from it.
      // Above, Parse JSON string into JavaScript object because the retrieved data is a string.

      if (jsonData.length > 0) {
        res.status(200).json(jsonData);
        // Above, is a if statment to make sure there is data to be read
        // Also, I attach a id to each object in the data.
      } else {
        res.status(500).json("No respones in getting response array!");
      }

      // Above, is the reponse if no data is in the file or there is a server problem.
    })

    .catch((error) => {
      console.error("Error reading file:", error);
      res.status(500).json("Error reading file!");
    });

  // Above, is to catch if there is a error with the promise or if there is no data in file.
});

module.exports = notes;

// Above, I export all the routes.
