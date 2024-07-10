import mongoose from "mongoose";
import { author } from "../models/Author.js";

class AuthorController {
  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Author registered.", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - error while creating author.` });
    }
  }

  static async listAuthors(req, res) {
    try {
      const authorList = await author.find({});
      res.status(200).json(authorList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed.` });
    }
  }

  static async listAuthorById(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid author ID." });
      }
      const authorFound = await author.findById(id);
      if (!authorFound) {
        return res.status(404).json({ message: "Author not found." });
      }
      res.status(200).json(authorFound);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - author not found.` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid author ID." });
      }
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json("Author updated.");
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed.` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid author ID." });
      }
      await author.findByIdAndDelete(id);
      res.status(200).json("Author deleted.");
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed.` });
    }
  }
}

export default AuthorController;
