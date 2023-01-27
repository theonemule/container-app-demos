const express = require('express')
const app = express()

app.use(express.json());

app.post('/hello', (req, res) => {
    console.log("Received:", req.body);
    res.sendStatus(200);
});

app.listen(5002);