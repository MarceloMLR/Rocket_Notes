const router = require("express");

const usersRoutes = require("./user.routes");

const routes = router();

routes.use('/users', usersRoutes)

module.exports = routes