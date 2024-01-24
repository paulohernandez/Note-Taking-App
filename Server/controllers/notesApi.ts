import { Request, Response } from "express";
import Notes from "../helpers/models/notesModel";
export default class notesApi {
  static async fetchNotes(req: Request, res: Response) {
    try {
      const notes = await Notes.find({}).sort({ createdAt: -1 });
      if (notes.length > 0) {
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
    if(title == '' && content == ''){
      res.status(400).json({ message: 'Title and content has no value' , responsecode:0  });
    }else if(title == ''){
      res.status(400).json({ message: 'Title is empty value' , responsecode:0});
    }else if(content == ''){
      res.status(400).json({ message: 'Content is empty value' , responsecode:0});
    }else if(userId == '' && isNaN(userId)){
      res.status(400).json({ message: 'Id is not a number or Empty' , responsecode:0});
    }else{
    try {
      const note = await Notes.create({ title, content, userId });
      res.status(202).json({note, responsecode:1});
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
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
      res.status(202).json({ message: "Note Deleted" , data:deletedNote});
    } catch (error: any) {
      res.status(400).json({ message: "Error in NoSql", error: error.message });
    }
  }
}
