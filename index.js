const express = require('express');
const port = 4000;
const app = express();
const routes = require('./src/router/swap.route');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});