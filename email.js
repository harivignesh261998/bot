var nodemailer = require('nodemailer');
var number=[];

for(let i=0;i<4;i++){
   number+=Math.floor(Math.random()*10);
   console.log(number)
}

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
  html:'<h1>'+number+'</h1>'
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('yemi ra ithu ',error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});