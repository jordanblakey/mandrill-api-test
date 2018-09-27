// Using Node and NodeMailer

var nodemailer = require('nodemailer');
var username = 'pulseM';
var password = 'EgVbEGmQBNnL49KQhthh6w';

// nodemailer.send({
//   host: "smtp.mandrillapp.com",
//   port: 25,
//   to: "jordan@pulsem.me",
//   from: "jordan@pulsem.me",
//   subject: "Mandrill knows JS!",
//   body: "Hello from NodeJS",
//   authentication: "login",
//   username: username,
//   password: password
// }, function(err, result) {
//   if (err) {
//     console.log(err)
//   }
// })

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.mandrillapp.com',
    port: 25,
    secure: false,
    auth: {
      user: username,
      pass: password
    }
  });

  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
