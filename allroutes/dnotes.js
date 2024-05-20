const deleteNote = require("express").Router();
const fs = require("fs/promises");

// Above, I import fs promises and the express router.

deleteNote.delete("/:id", (req, res) => {
  // Above, I set the id parameter as a route.

  const cardID = req.params.id;

  // Above, I get the ID from the parameters passed in.

  fs.readFile("./db/db.json", "utf8")
    .then((data) => {
      let jsonData = JSON.parse(data);
      //Above, I read the current db file and then parse the data from it.
      // Above, Parse JSON string into JavaScript object because the retrieved data is a string.

      if (jsonData.length > 0) {
        let updatedJsonData = jsonData.filter((obj) => obj.id !== cardID);
        const updatedJsonString = JSON.stringify(updatedJsonData, null, 2);
        return updatedJsonString;

        // Above I check if there is any data returned and then filter the array  according to the id match.
        // Then, I stringify thios data and return it for my next .then.
      } else {
        res.status(500).json("No respones in getting response array!");
      }

      // Above, is the reponse if no data is in the file or there is a server problem.
    })
    .then((updatedJsonString) => {
      fs.writeFile("./db/db.json", updatedJsonString, "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        //Next, I write a a new db.json file with a updated string version.
        console.log("Data appended successfully.");
      });
    })

    .catch((error) => {
      console.error("Error reading file:", error);
      res.status(500).json("Error reading file!");
    });

  // Above, is to catch if there is a error with the promise or if there is no data in file.

  res.status(200).json("Note Removed");
});

module.exports = deleteNote;
