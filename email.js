var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'aol',
  auth: {
    user: 'harivignesh260998',
    pass: 'kdhugqzrdkgdzmaa'
  }
});

var mailOptions = {
  from: 'harivignesh260998@aol.com',
  to: 'harivignesh261998@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('yemi ra ithu ',error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});