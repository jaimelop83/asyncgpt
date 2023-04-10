const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, '..', "static")));

// homepage route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Serve the "page.html" file
// remember to add '..' to go up one directory to find the static folder
app.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "static", "page.html"), (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("Page not found");
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
