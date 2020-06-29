// Require db
const noteData = require("../db/db.json");

// Routes
module.exports = function (app) {
  // Displays all notes in json format
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  // Post new note
  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    res.json(noteData);
  });

  // Delete note
  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let removeIndex;

    for (let i = 0; i < noteData.length; i++) {
      if (noteData[i].id === noteId) {
        removeIndex = i;
      }
    }

    noteData.splice(removeIndex, 1);

    res.json(noteData);
  });
};
