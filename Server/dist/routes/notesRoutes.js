"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesApi_1 = __importDefault(require("../controllers/notesApi"));
const notesRouter = express_1.default.Router();
notesRouter.get("/", notesApi_1.default.fetchNotes);
notesRouter.post("/", notesApi_1.default.insertNote);
notesRouter.get("/:noteId", notesApi_1.default.fetchSingleNote);
notesRouter.put("/:noteId", notesApi_1.default.updateNote);
notesRouter.delete("/:noteId", notesApi_1.default.deleteNote);
exports.default = notesRouter;
