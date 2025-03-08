const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();
    res.status(201).json({ message: "Note Created", note: newNote });
  } catch (error) {
    res.status(500).json({ message: "Failed to create note", error });
  }
});

router.get("/notes", async (req, res) => {
  try{
    const notes = await Note.find();
    res.status(200).json(notes);
  }
  catch(error){
    res.status(500).json({message: "Failed to retrieve notes", error})
  }
});

router.delete("/notes/:id", async (req,res) => {
  try{
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    if(!deleteNote){
      return res.status(404).json({message: "Note not found"});
    }
    res.status(200).json({message: "Note successfully deleted", note: deleteNote});
  }
  catch(error){
    res.status(500).json({message: "Failed to delete note", error});
  }
})

module.exports = router;
