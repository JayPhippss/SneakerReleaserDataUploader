// Imports
// Import the functions you need from the SDKs you need

// NPM Constants
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Setup index.html
app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// Route handler for /upload endpoint
app.post('/upload', (req, res) => {
    const data = req.body;
    axios.post('https://sneakerreleaser.firebaseio.com', JSON.stringify(data))
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });

// Listen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))