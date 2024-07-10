import book from "../models/Book.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const bookList = await book.find({});
      res.status(200).json(bookList);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed.` });
    }
  }

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
}

export default BookController;
