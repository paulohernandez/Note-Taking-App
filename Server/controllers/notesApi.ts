import { Request, Response } from "express";
import Notes from "../helpers/models/notesModel";
export default class notesApi {
  static async fetchNotes(req: Request, res: Response) {
    try {
      const notes = await Notes.find({}).sort({ createdAt: -1 });
      if (notes.length > 1) {
        res.status(202).json({ data: notes });
      } else {
        res.status(400).json({ message: "No available notes" });
      }
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }
  static async fetchSingleNote(req: Request, res: Response) {
    const { noteId } = req.params;
    try {
      const note = await Notes.findOne({ _id: noteId });

      if (!note) {
        res.status(400).json({ message: "No note found" });
      }
      res.status(202).json({ data: note });
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }
  static async insertNote(req: Request, res: Response) {
    const { title, content, userId } = req.body;
    try {
      const note = await Notes.create({ title, content, userId });
      res.status(202).json(note);
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }

  static async updateNote(req: Request, res: Response) {
    const { noteId } = req.params;
    try {
      const note = await Notes.findOneAndUpdate(
        { _id: noteId },
        { ...req.body },
      );
      if (!note) {
        res.status(400).json({ message: "No note found" });
      }
      res.send(200).json(note);
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }

  static async deleteNote(req: Request, res: Response) {
    const { noteId } = req.params;
    try {
      const deletedNote = await Notes.findOneAndDelete({ _id: noteId });

      if (!deletedNote) {
        res.status(400).json({ message: "No note found" });
      }
      res.status(202).json({ message: "Note Deleted" });
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }
}
