import mongoose, { Schema } from "mongoose";
const noteSchema = new Schema(
  {
    title: String,
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteChema);

export default Note;