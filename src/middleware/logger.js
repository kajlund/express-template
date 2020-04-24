/**
 * Using custom middleware for logging. Another option would be:
 * const expressLogger = require('express-pino-logger')({ logger: log });
 */

const log = require('../util/logger')

// @desc  Logs request info to console
const logger = (req, res, next) => {
  log.info(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
}

module.exports = logger
