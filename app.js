const express = require('express');
const logStore = require('./logStore');
const logger = require('./logger');


const app = express();
app.use(express.json());

// Register the logger middleware first so it catches everything
app.use(logger); 

// US-005: Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// US-001: View All Logs
app.get('/logs', (req, res) => {
  const logs = logStore.getAllLogs();
  res.status(200).json(logs);
});

// US-002: Create a New Log
app.post('/logs', (req, res) => {
  const { vehicle, serviceType, description, mileage } = req.body;

  if (!vehicle || !serviceType) {
    return res.status(400).json({ error: 'vehicle and serviceType are required' });
  }

  const newLog = logStore.createLog(vehicle, serviceType, description, mileage);
  res.status(201).json(newLog);
});

// US-003: Retrieve a Single Log
app.get('/logs/:id', (req, res) => {
  const log = logStore.getLogById(req.params.id);
  
  if (!log) {
    return res.status(404).json({ error: 'Maintenance log not found' });
  }
  
  res.status(200).json(log);
});

// US-004: Delete a Log
app.delete('/logs/:id', (req, res) => {
  const wasDeleted = logStore.deleteLog(req.params.id);
  
  if (!wasDeleted) {
    return res.status(404).json({ error: 'Maintenance log not found' });
  }
  
  res.status(204).send(); 
});

module.exports = app;