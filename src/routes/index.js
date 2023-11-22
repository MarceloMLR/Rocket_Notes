const router = require("express");

const usersRoutes = require("./user.routes");
const notesRoutes = require("./notes.routes");

const routes = router();

routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)

module.exports = routes