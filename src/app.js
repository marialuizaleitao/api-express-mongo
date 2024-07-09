import express from "express";

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Lord of the Rings",
  },
  {
    id: 2,
    title: "The Power of Now",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Node.js application");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body)
  res.status(201).send("Book registered!");
});

export default app;
