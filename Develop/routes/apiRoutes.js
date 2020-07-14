module.exports = function(app) {
    var path = require("path");

    const fs = require("fs");
    const { v4: uuidv4 } = require('uuid');
    // var count = 4;
    var notes=[
      
    ];
  
    // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json","utf8",function(err,data){
            if (err) return err;
            console.log("Fetching Data From File");
           // console.log(data);
           // reset Notes array
           notes = [];
            var parsedData = JSON.parse(data);
           // console.log(parsedData);
            parsedData.forEach(function(item) {
               // console.log(item);
                notes.push(item);
            })

            console.log(notes);
            // Return 'notes' array of OBJECTS to the AJAX call
            res.json(notes);

        });
        
    });

    // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function(req, res) {
            console.log("Posting New Note")
    // fill in code 
        // Grabbing User Input From Forms
        var newNote=req.body;
        console.log(newNote);
        // Add an ID to our new Note
        // count++;  // Increment our counter (ID)
        newNote.id =  uuidv4(); 
        console.log(newNote);
 
        // Turn User into into Strings
       // var noteInput = JSON.stringify(newNote);
       // console.log(noteInput);
       console.log(notes);
        notes.push(newNote);

        fs.writeFile("db/db.json", JSON.stringify(notes), function(err) {

            if (err) {
            return console.log(err);
            }
        
            console.log("Success!");
            res.json(newNote);

        
        });
     

    });
    
    
//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

var deleteNote=app.delete("/api/notes/:id", function(req, res) {

 console.log(req.params.id)
// fill in code 
        fs.readFile("db/db.json", function(err) {

            if (err) {
            return console.log(err);
            }
         
            // deleteNote(req.params.id)
        });

  });
  




};