"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notesModel_1 = __importDefault(require("../helpers/models/notesModel"));
class notesApi {
    static fetchNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield notesModel_1.default.find({}).sort({ createdAt: -1 });
                if (notes.length > 0) {
                    res.status(202).json({ data: notes });
                }
                else {
                    res.status(400).json({ message: "No available notes" });
                }
            }
            catch (error) {
                res.status(400).json({ message: "Error in NoSql", error: error.message });
            }
        });
    }
    static fetchSingleNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { noteId } = req.params;
            try {
                const note = yield notesModel_1.default.findOne({ _id: noteId });
                if (!note) {
                    res.status(400).json({ message: "No note found" });
                }
                res.status(202).json({ data: note });
            }
            catch (error) {
                res.status(400).json({ message: "Error in NoSql", error: error.message });
            }
        });
    }
    static insertNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, userId } = req.body;
            if (title == '' && content == '') {
                res.status(400).json({ message: 'Title and content has no value', responsecode: 0 });
            }
            else if (title == '') {
                res.status(400).json({ message: 'Title is empty value', responsecode: 0 });
            }
            else if (content == '') {
                res.status(400).json({ message: 'Content is empty value', responsecode: 0 });
            }
            else if (userId == '' && isNaN(userId)) {
                res.status(400).json({ message: 'Id is not a number or Empty', responsecode: 0 });
            }
            else {
                try {
                    const note = yield notesModel_1.default.create({ title, content, userId });
                    res.status(202).json({ note, responsecode: 1 });
                }
                catch (error) {
                    res.status(400).json({ message: "Error in NoSql", error: error.message });
                }
            }
        });
    }
    static updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { noteId } = req.params;
            try {
                const note = yield notesModel_1.default.findOneAndUpdate({ _id: noteId }, Object.assign({}, req.body));
                if (!note) {
                    res.status(400).json({ message: "No note found" });
                }
                res.send(200).json(note);
            }
            catch (error) {
                res.status(400).json({ message: "Error in NoSql", error: error.message });
            }
        });
    }
    static deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { noteId } = req.params;
            try {
                const deletedNote = yield notesModel_1.default.findOneAndDelete({ _id: noteId });
                if (!deletedNote) {
                    res.status(400).json({ message: "No note found" });
                }
                res.status(202).json({ message: "Note Deleted", data: deletedNote });
            }
            catch (error) {
                res.status(400).json({ message: "Error in NoSql", error: error.message });
            }
        });
    }
}
exports.default = notesApi;
