const logger = require('./logger')


try {
    nonExistentFunction();
  } catch (error) {
    logger.error('mensaje de error')
  }
  

