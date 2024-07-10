import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.post("/authors", AuthorController.createAuthor);
routes.get("/authors", AuthorController.listAuthors);
routes.get("/authors/:id", AuthorController.listAuthorById);
routes.put("/authors/:id", AuthorController.updateAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;
