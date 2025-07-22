const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node.js Server!' });
})

app.listen(port, () => {
    
})