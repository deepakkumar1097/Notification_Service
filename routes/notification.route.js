const notifiactionController = require("../controllers/notification.controller");

module.exports = function (app) {
  app.post(
    "/notificationService/api/v1/notification",
    notifiactionController.acceptNotification
  );
};
