const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

const messages = {
  English: "Hello world",
  French: "Bonjour le monde",
  Hindi: "Namastey sansar",
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/hello", (req, res) => {
  const { language } = req.query;
  if (language && messages[language]) {
    res.json({ msgText: messages[language] });
  } else {
    res.status(400).json({ error_message: "The requested language is not supported" });
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Server Running", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
