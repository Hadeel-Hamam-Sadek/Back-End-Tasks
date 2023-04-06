const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Home page - GET request
app.get('/', (req, res) => {
  res.send('Welcome to home page');
});


app.post('/users/add', (req, res) => {
    console.log('User added:', req.body);
res.send('User added successfully');
});

// Users page - GET request
app.get('/users', (req, res) => {
    const users = [
  { id: 1, username: 'john', email: 'john@example.com' },
  { id: 2, username: 'jane', email: 'jane@example.com' },
  { id: 3, username: 'bob', email: 'bob@example.com' },
];
  res.json(users);
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
