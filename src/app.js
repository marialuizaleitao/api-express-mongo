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

app.get("/books/:id", (req, res) => {
  const index = findById(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book registered!");
});

function findById(id) {
  return books.findIndex(books => {
    return books.id === Number(id);
  });
}

export default app;
