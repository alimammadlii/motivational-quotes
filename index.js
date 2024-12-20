import express from "express";
import quotesy from 'quotesy';

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files, such as CSS
app.use(express.static("public"));

// Route: Homepage
app.get("/", (req, res) => {
  res.render("index");
});

// Route: Generate a new quote
app.post("/quote", (req, res) => {
  res.redirect("/quote")
});


// Route: Render the quote page
app.get("/quote", (req, res) => {
  const newQuote = quotesy.random().text;
  res.render("quote", { quote: newQuote }); // Pass the quote to the template
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
