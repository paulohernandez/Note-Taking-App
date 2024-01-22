"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesRoutes_1 = __importDefault(require("./routes/notesRoutes"));
const app = (0, express_1.default)();
const port = 4000;
app.use('/api/notes', notesRoutes_1.default);
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
