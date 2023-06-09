const express = require('express');
const app = express();
const path = require('path');
const fs =require('fs');
const bodyParser = require("body-parser"); 




app.use(express.json());
app.use(bodyParser.json());


app.get('/getBirds', (req, res) => {
  return fs.readFile('./historicalbirds.json', 'UTF-8', (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); // Internal Server Error
    } else {
      // const parsed = JSON.parse(data)
      return res.json(data); // Send the bird list as JSON response
    }
  });
});

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
});




app.post('/addBirds', (req, res, next) => {
  const {body} = req;
  fs.readFile('./historicalbirds.json', 'UTF-8', (err, data) => {
    console.log(data)
    let parsedData = JSON.parse(data);
    if (parsedData == null) {
      parsedData = [];
    }
    parsedData.push(body);
    const text = JSON.stringify(parsedData)
    fs.writeFile('./historicalbirds.json', text, (err) => {
      if (err) {
        console.log(err)
        res.status(500)
      }
      else {
        console.log('success')
        return res.status(200)
      }
    })
  })
  return next()
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
