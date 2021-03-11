const router = require('koa-router')()

const home = require('./user')

router.use('/', home.routes(), home.allowedMethods())


module.exports = router