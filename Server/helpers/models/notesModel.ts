import mongoose from "mongoose";

const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const NotesModel = mongoose.model("Notes", notesSchema);

export default NotesModel;
