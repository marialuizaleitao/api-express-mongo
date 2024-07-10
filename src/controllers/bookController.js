import book from "../models/Book.js";
import mongoose from "mongoose";

class BookController {
  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Book registered.", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - error while creating book.` });
    }
  }

  static async listBooks(req, res) {
    try {
      const bookList = await book.find({});
      res.status(200).json(bookList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed.` });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid book ID." });
      }
      const bookFound = await book.findById(id);
      if (!bookFound) {
        return res.status(404).json({ message: "Book not found." });
      }
      res.status(200).json(bookFound);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - book not found.` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid book ID." });
      }
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json("Book updated.");
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed.` });
    }
  }
}

export default BookController;
