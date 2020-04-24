const path = require('path')

const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const hpp = require('hpp')
const xss = require('xss-clean')

const cnf = require('./config')
const db = require('./db')
const log = require('./util/logger')
const routes = require('./routes')

//load db
db.init()

log.info('Creating app and setting port')
const app = express()
app.set('port', cnf.port)

/* MIDDLEWARE */
log.info('Adding middleware...')

/* adds the /status route for monitoring express server  */
log.info('Adding express-status-monitor...')
app.use(require('express-status-monitor')())

// Use gzip compression if serving without proxy
log.info('Adding gzip compression middleware')
app.use(compression())

// Handle json and form input
log.info('Adding form and json input handling middleware')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set security headers
log.info('Set Helmet security headers')
app.use(helmet())

// Prevent XSS attacks
log.info('Prevent XSS attacks')
app.use(xss())

// Prevent http param pollution
log.info('Prevent param pollution')
app.use(hpp())

// Enable CORS
log.info('Enable CORS')
app.use(cors())

// request logger middleware
log.info('Enable request logging middleware')
app.use(require('./middleware/logger'))

// Serve static files
log.info('Serve public folder')
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

log.info('Register routes')
routes.register(app)

module.exports = app
