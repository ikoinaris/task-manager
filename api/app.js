const express = require('express');
const app = express();

app.get('/lists', (req, res) => {})

app.post('/lists', (req, res) => {})

app.patch('/lists/:id', (req, res) => {})

app.delete('/lists/:id', (req, res) => {})

app.listen(3000, () => {
    console.log('Server is listening to port 3000');
})