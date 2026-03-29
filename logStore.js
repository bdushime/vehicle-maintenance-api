let logs = [];
let currentId = 1;

const logStore = {
  getAllLogs: () => {
    return logs;
  },

  getLogById: (id) => {
    return logs.find(log => log.id === parseInt(id, 10));
  },

  createLog: (vehicle, serviceType, description = '', mileage = null) => {
    const newLog = {
      id: currentId++,
      vehicle,
      serviceType,
      description,
      mileage,
      createdAt: new Date().toISOString()
    };
    logs.push(newLog);
    return newLog;
  },

  deleteLog: (id) => {
    const index = logs.findIndex(log => log.id === parseInt(id, 10));
    if (index !== -1) {
      logs.splice(index, 1);
      return true;
    }
    return false;
  },

  reset: () => {
    logs = [];
    currentId = 1;
  }
};

module.exports = logStore;