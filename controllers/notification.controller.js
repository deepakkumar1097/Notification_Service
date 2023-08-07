const Notification = require("../models/notification.model");

exports.acceptNotification = async (req, res) => {
  try {
    const queryObj = {
      subject: req.body.subject,
      recepientEmail: req.body.recepientEmail,
      content: req.body.content,
      requester: req.body.requester,
    };

    const notification = await Notification.create(queryObj);

    res.status(201).send({
      message: "Notification request Accepted",
      trackingId: notification._id,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};
