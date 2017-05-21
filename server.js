const express = require('express');
const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/api', function (req, res) {
  console.log(__dirname);
  res.sendFile(`${__dirname}/public/index.html`);
});

// GET /model/:id/prediction

// POST /model/:id/prediction/train

// POST /model/:id/test

// POST /model (#inputs #outputs #learning rate)

//

console.log(`Server is running on port: ${PORT}`);

app.listen(PORT);
