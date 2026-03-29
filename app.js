const express = require('express');
const logStore = require('./logStore');

const app = express();
app.use(express.json()); 

app.get('/logs', (req, res) => {
  const logs = logStore.getAllLogs();
  res.status(200).json(logs);
});

module.exports = app;