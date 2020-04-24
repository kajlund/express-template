const path = require('path')

const dotenv = require('dotenv')

const cnf = {}

// Load env vars
const envFile = path.join(process.cwd(), '.env')
dotenv.config({ path: envFile })

cnf.env = process.env.NODE_ENV || 'development'
cnf.isProduction = Boolean(cnf.env === 'production')
cnf.port = parseInt(process.env.PORT, 10) || 3000
cnf.logLevel = process.env.LOG_LEVEL || 'error'

module.exports = cnf
