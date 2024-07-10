import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Connection error", error);
});

connection.once("open", () => {
  console.log("Database connection succeeded!");
});

const app = express();
routes(app);

app.get("/books/:id", (req, res) => {
  const index = findById(req.params.id);
  res.status(200).json(books[index]);
});

app.put("/books/:id", (req, res) => {
  const index = findById(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = findById(req.params.id);
  books.splice(index, 1);
  res.status(204);
});

export default app;
