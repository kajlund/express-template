// Initialize DB and ORM framework

const knex = require('knex')
const { Model } = require('objection')

const cnf = require('./config')
const log = require('./util/logger')

// Connect to DB
const init = () => {
  const knexConfig = require('../db/knexfile')
  const dbConf = cnf.isProduction ? knexConfig.production : knexConfig.development
  log.info(dbConf, 'Initialize DB connection')
  const knexdb = knex(dbConf)
  // Initialize Objection
  log.info('Initializing Objection ORM')
  Model.knex(knexdb)
}

module.exports = {
  init,
}
