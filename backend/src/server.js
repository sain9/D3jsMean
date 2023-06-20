const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const connectToDatabase = require('./config/database');

const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4200' }));
const port = 4000;

app.use(express.json());

connectToDatabase();

app.use('/', dataRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});