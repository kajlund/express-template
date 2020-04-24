const userRoutes = require('./user')
const { AppError } = require('../util/errors')

exports.register = (app) => {
  app.use('/api/v1/', userRoutes)

  // any route not caught at this point returns 404
  app.all('*', (req, res, next) => {
    next(new AppError(`Not Found ${req.originalUrl}`, 404))
  })

  /* catch-all route errors */
  app.use(require('../middleware/error'))
}
