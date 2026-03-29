const express = require('express');
const logStore = require('./logStore');

const app = express();
app.use(express.json());

app.get('/logs', (req, res) => {
  const logs = logStore.getAllLogs();
  res.status(200).json(logs);
});


app.post('/logs', (req, res) => {
  const { vehicle, serviceType, description, mileage } = req.body;

  
  if (!vehicle || !serviceType) {
    return res.status(400).json({ error: 'vehicle and serviceType are required' });
  }

  const newLog = logStore.createLog(vehicle, serviceType, description, mileage);
  res.status(201).json(newLog);
});


app.get('/logs/:id', (req, res) => {
  const log = logStore.getLogById(req.params.id);
  
  if (!log) {
    return res.status(404).json({ error: 'Maintenance log not found' });
  }
  
  res.status(200).json(log);
});

module.exports = app;