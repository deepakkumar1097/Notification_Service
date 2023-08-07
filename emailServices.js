const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "badrishchoubeystar@gmail.com",
    pass: "ewkhzkpxzjkcvhzn",
  },
});

var mailDetails = {
  to: "deepakselvam26@gmail.com",
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};
emailTransporter.sendMail(mailDetails, (err, data) => {
  if (err) {
    console.log("Error Occurs", err);
  } else {
    console.log(`Email sent successfully ${data.toString()}`);
  }
});
