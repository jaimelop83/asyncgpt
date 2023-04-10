const express = require("express");
const path = require("path");

const app = express();

// log every request to the console
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); // pass the request on to the next middleware function
});

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, '..', "static")));

// homepage route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Serve the "page.html" file in the static folder
// remember to add '..' to go up one directory to find the static folder
app.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "static", "page.html"), (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("Page not found");
    }
  });
});

// 404 error handler
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
