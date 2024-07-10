import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.post("/books", BookController.createBook);
routes.get("/books", BookController.listBooks);
routes.get("/books/:id", BookController.listBookById);
routes.put("/books/:id", BookController.updateBook);

export default routes;
