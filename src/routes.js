const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");
const DashboardController = require("./app/controllers/DashboardController");
const FileController = require("./app/controllers/FileController");
const AppointmentController = require("./app/controllers/AppointmentsController");
const AvailableController = require("./app/controllers/AvailableController");
const ErrorController = require("../src/app/controllers/ErrorController");

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash("success");
  res.locals.flashError = req.flash("error");
  return next();
});

routes.get("/files/:file", FileController.show);

// SESSION CONTROLLERS
routes.get("/", guestMiddleware, SessionController.create);
routes.post("/signin", SessionController.store);
routes.use("/app/logout", SessionController.destroy);

// USER CONTROLLERS
routes.get("/signup", guestMiddleware, UserController.create);
routes.post("/signup", upload.single("avatar"), UserController.store);

//APP AND DASHBOARD
routes.use("/app", authMiddleware);
routes.get("/app/dashboard", DashboardController.index);

// APPOINTMENT CONTROLLER
routes.get("/app/appointments/new/:providerId", AppointmentController.create);
routes.get("/app/available/:provider", AvailableController.index);

// ERROR 404
routes.use("/", ErrorController.index);

module.exports = routes;
