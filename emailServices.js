const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    //user: "badrishchoubeystar@gmail.com",
    user: "deepakselvam26@gmail.com",
    //pass: "ewkhzkpxzjkcvhzn",
    pass: "wnbhkvpefnuphixn",
  },
});

// var mailDetails = {
//   to: "deepakkumar.idk1097@gmail.com",
//   subject: "Test mail",
//   text: "Node.js testing mail for CRM projects",
// };
// emailTransporter.sendMail(mailDetails, (err, data) => {
//   if (err) {
//     console.log("Error Occurs", err);
//   } else {
//     console.log(`Email sent successfully ${data.toString()}`);
//   }
// });
