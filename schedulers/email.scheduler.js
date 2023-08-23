const cron = require("node-cron");
const Notification = require("../models/notification.model");
const emailTransporter = require("../emailServices");

cron.schedule("*/5 * * * * *", async () => {
  const notifications = await Notification.find({ status: "UN_SENT" });
  console.log(notifications);
  if (notifications) {
    notifications.forEach(async (notification) => {
      const { recepientEmail, subject, requester, content } = notification;

      var mailDetails = {
        to: recepientEmail,
        subject: subject,

        // text: notification.content,
        html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5990"><span>Action Require: Request Notification</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${recepientEmail},</span><div style="padding:1.5rem 0"><span>You have received a ticket from ${requester}, Please kindly take an action</span><div style="padding:1.5rem 0"><span>more information about ticket: ${content}</span></div></div><a style="width:200px;padding:10px 15px;background-color:#4c649b;color:#fff;text-decoration:none;font-weight:600" href="#">To see more about ticket, click below</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0">Elauch helps you connect and share with the people in your life.</span></div></div>`,
      };
      emailTransporter.sendMail(mailDetails, async (err, data) => {
        if (!err) {
          console.log(`Email sent successfully ${notification.recepientEmail}`);
          notification.status = "SENT";
          await notification.save();
        }
      });
    });
  }
  //console.log("running a task every second");
});
