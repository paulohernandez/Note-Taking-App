import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import notesRouter from "./routes/notesRoutes";
import connectDB from "./helpers/connectDB";
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`listening to port ${port}`);
});
