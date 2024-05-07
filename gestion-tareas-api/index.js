const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasksRoutes');
const { mongoURI } = require('./config/db');

const app = express();

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
