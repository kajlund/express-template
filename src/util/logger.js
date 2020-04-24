/**
 * All arguments supplied after message are serialized and interpolated according to any supplied
 * printf-style placeholders (%s, %d, %o|%O|%j) to form the final output msg value for the JSON log line.
 * logger.info('%o hello %s', {worldly: 1}, 'world')
 */

const pino = require('pino')

const conf = require('../config')

const logger = pino({
  // 'fatal', 'error', 'warn', 'info', 'debug', 'trace' or 'silent'
  level: conf.logLevel,
  prettyPrint: conf.isProduction ? false : { colorize: true },
})

exports.trace = (mergingObject, message, interpolationValues) => {
  logger.trace(mergingObject, message, interpolationValues)
}

exports.debug = (mergingObject, message, interpolationValues) => {
  logger.debug(mergingObject, message, interpolationValues)
}

exports.info = (mergingObject, message, interpolationValues) => {
  logger.info(mergingObject, message, interpolationValues)
}

exports.warn = (mergingObject, message, interpolationValues) => {
  logger.warn(mergingObject, message, interpolationValues)
}

exports.error = (mergingObject, message, interpolationValues) => {
  logger.error(mergingObject, message, interpolationValues)
}

exports.fatal = (mergingObject, message, interpolationValues) => {
  logger.fatal(mergingObject, message, interpolationValues)
}
