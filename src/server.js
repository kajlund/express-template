// load app.js and listen on PORT
const app = require('./app')
const log = require('./util/logger')

const server = app.listen(app.get('port'), () => {
  log.info(`App running on port: ${app.get('port')} in ${app.get('env')} mode.`)
  log.info('Press Ctrl-C to stop\n')
})

process.on('uncaughtException', function (err) {
  log.fatal(err.stack)
  process.exit(1)
})

// Handle unhandled promise rejection
process.on('unhandledRejection', (err) => {
  log.fatal(`Unhandled rejection: ${err.message}`)
  // Close server and exit process
  server.close(() => process.exit(1))
})

module.exports = server
