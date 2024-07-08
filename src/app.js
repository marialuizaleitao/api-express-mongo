import express from "express";

const app = express();

app.get("/", (req, res) => {
 res.status(200).send("Node.js application");
});

export default app;