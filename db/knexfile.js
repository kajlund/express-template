require('../src/config')

module.exports = {
  production: {
    client: 'sqlite3',
    connection: {
      filename: '../dev.sqlite3',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true,
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: '../dev.sqlite3',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true,
  },
}
