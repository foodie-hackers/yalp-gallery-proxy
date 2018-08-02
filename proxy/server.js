const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use('/:id', express.static('public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
