// Express server
const express = require('express');

// Configuration of the express server
const cfg = {
    port: process.env.PORT || 3000,
};

// Express initialization
const app = express();

// Home page route
app.get('/', (req, res) => {
    res.send('Hello World! This is the home page of the server. NodeJS and Express is running!');
});

// chat page route
app.get('/chat', (req, res) => {
    res.send('This will be the chat page of the server.');
});
// Start the server
app.listen(cfg.port, () => {
    console.log(`Server listening on port ${cfg.port}!`);
});