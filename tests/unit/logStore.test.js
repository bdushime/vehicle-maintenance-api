const logStore = require('../../logStore');

describe('logStore Unit Tests', () => {
  
  beforeEach(() => {
    logStore.reset();
  });

  test('should start with an empty array of logs', () => {
    expect(logStore.getAllLogs()).toEqual([]);
  });

  test('should create a new maintenance log', () => {
    const log = logStore.createLog('2014 Toyota RAV4', 'Oil Change', 'Synthetic oil', 85000);
    
    expect(log).toHaveProperty('id', 1);
    expect(log.vehicle).toBe('2014 Toyota RAV4');
    expect(log.serviceType).toBe('Oil Change');
    expect(log).toHaveProperty('createdAt');
    expect(logStore.getAllLogs().length).toBe(1);
  });

  test('should retrieve a log by ID', () => {
    logStore.createLog('2014 Toyota RAV4', 'Brake Pad Replacement');
    const retrievedLog = logStore.getLogById(1);
    
    expect(retrievedLog.serviceType).toBe('Brake Pad Replacement');
  });

  test('should delete a log by ID', () => {
    logStore.createLog('2014 Toyota RAV4', 'Tire Rotation');
    const wasDeleted = logStore.deleteLog(1);
    
    expect(wasDeleted).toBe(true);
    expect(logStore.getAllLogs().length).toBe(0);
  });
});