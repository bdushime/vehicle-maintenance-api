const logger = (req, res, next) => {
  const start = Date.now();
 
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logEntry = {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      responseTimeMs: duration
    };
    
    
    console.log(JSON.stringify(logEntry));
  });
  
  next(); 
};

module.exports = logger;