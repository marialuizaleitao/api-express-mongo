import express from "express";
import connectDB from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Connection error", error);
});

connection.once("open", () => {
  console.log("Database connection succeeded!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Node.js application");
});

app.get("/books", async (req, res) => {
  const bookList = await book.find({});
  res.status(200).json(bookList);
});

app.get("/books/:id", (req, res) => {
  const index = findById(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book registered!");
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
